package cn.chasers.wehappy.user.service.impl;

import cn.chasers.wehappy.common.config.SnowflakeConfig;
import cn.chasers.wehappy.common.exception.Asserts;
import cn.chasers.wehappy.common.msg.ProtoMsg;
import cn.chasers.wehappy.common.util.MessageUtil;
import cn.chasers.wehappy.user.constant.MessageConstant;
import cn.chasers.wehappy.user.entity.Friend;
import cn.chasers.wehappy.user.entity.User;
import cn.chasers.wehappy.user.mapper.FriendMapper;
import cn.chasers.wehappy.user.mq.Producer;
import cn.chasers.wehappy.user.service.IFriendService;
import cn.chasers.wehappy.user.service.IUserService;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mysql.cj.MessageBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 好友信息表 服务实现类
 * </p>
 *
 * @author lollipop
 * @since 2020-10-26
 */
@Service
@Slf4j
public class FriendServiceImpl extends ServiceImpl<FriendMapper, Friend> implements IFriendService {

    private final FriendMapper friendMapper;
    private final IUserService userService;
    private final Producer producer;
    private final SnowflakeConfig snowflakeConfig;

    @Autowired
    public FriendServiceImpl(FriendMapper friendMapper, IUserService userService, Producer producer, SnowflakeConfig snowflakeConfig) {
        this.friendMapper = friendMapper;
        this.userService = userService;
        this.producer = producer;
        this.snowflakeConfig = snowflakeConfig;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean addFriend(Long fromId, Long toId) {
        User to = userService.getById(toId);
        if (to == null) {
            Asserts.fail(MessageConstant.USER_NOT_EXIST);
        }

        Friend friend1 = new Friend();
        friend1.setFromId(toId);
        friend1.setToId(fromId);

        Friend friend2 = new Friend();
        friend2.setFromId(fromId);
        friend2.setToId(toId);

        if (!saveBatch(Arrays.asList(friend1, friend2))) {
            Asserts.fail(MessageConstant.ERROR_ADD_FRIEND);
        }

        Map<String, Object> map = Map.of("type", "addFriend", "userId", toId, "fromId", fromId, "dateTime", new Date(System.currentTimeMillis()));
        pushMessage(map, String.valueOf(toId));

        return true;
    }

    @Override
    public boolean deleteFriend(Long fromId, Long toId) {
        return friendMapper.delete(
                new LambdaQueryWrapper<Friend>()
                        .allEq(Map.of(Friend::getFromId, fromId, Friend::getToId, toId))
                        .allEq(Map.of(Friend::getFromId, toId, Friend::getToId, fromId))) > 0;
    }

    @Override
    public boolean handleAddFriend(Long fromId, Long toId, Boolean agree) {
        if (agree) {
            lambdaUpdate()
                    .allEq(Map.of(Friend::getFromId, fromId, Friend::getToId, toId))
                    .or()
                    .allEq(Map.of(Friend::getFromId, toId, Friend::getToId, fromId))
                    .set(Friend::getStatus, 1)
                    .update();

            Map<String, Object> map = Map.of("type", "handleAddFriend", "userId", fromId, "fromId", toId, "result", true, "dateTime", new Date(System.currentTimeMillis()));
            pushMessage(map, String.valueOf(toId));

            return true;
        }

        lambdaUpdate()
                .allEq(Map.of(Friend::getFromId, fromId, Friend::getToId, toId))
                .or()
                .allEq(Map.of(Friend::getFromId, toId, Friend::getToId, fromId))
                .remove();

        Map<String, Object> map = Map.of("type", "handleAddFriend", "userId", fromId, "fromId", toId, "result", false, "dateTime", new Date(System.currentTimeMillis()));
        pushMessage(map, String.valueOf(toId));
        return true;
    }

    @Override
    public List<Friend> list(Long userId) {
        return lambdaQuery().eq(Friend::getFromId, userId).list();
    }

    @Override
    public boolean isFriend(Long fromId, Long toId) {
        return lambdaQuery().allEq(Map.of(Friend::getFromId, fromId, Friend::getToId, toId, Friend::getStatus, 1)).count() > 0;
    }

    private void pushMessage(Map<String, Object> map, String toId) {
        ProtoMsg.Message message = MessageUtil.newMessage(
                "0",
                String.valueOf(snowflakeConfig.snowflakeId()),
                String.valueOf(System.currentTimeMillis()),
                toId,
                ProtoMsg.MessageType.PUSH_MESSAGE,
                MessageUtil.newPushMessage(
                        ProtoMsg.ContentType.SYSTEM_MSG,
                        new JSONObject(map).toJSONString()
                )
        );

        producer.sendMessage(message);
    }
}
