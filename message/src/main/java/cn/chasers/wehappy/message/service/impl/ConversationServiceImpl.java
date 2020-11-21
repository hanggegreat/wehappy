package cn.chasers.wehappy.message.service.impl;

import cn.chasers.wehappy.message.entity.Conversation;
import cn.chasers.wehappy.message.entity.MessageIndex;
import cn.chasers.wehappy.message.mapper.ConversationMapper;
import cn.chasers.wehappy.message.service.IConversationService;
import cn.chasers.wehappy.message.service.IConversationUnreadService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 最近会话表 服务实现类
 * </p>
 *
 * @author lollipop
 * @since 2020-11-16
 */
@Slf4j
@Service
public class ConversationServiceImpl extends ServiceImpl<ConversationMapper, Conversation> implements IConversationService {

    @Autowired
    private IConversationUnreadService conversationUnreadService;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Conversation saveOrUpdate(MessageIndex index) {
        Conversation conversation;
        if (index.getFromId() == null) {
            conversation = lambdaQuery().eq(Conversation::getToId, index.getToId()).one();
        } else {
            conversation = lambdaQuery().allEq(Map.of(Conversation::getFromId, index.getFromId(), Conversation::getToId, index.getToId())).one();
        }

        if (conversation == null) {
            conversation = new Conversation();
            conversation.setType(index.getType());
            conversation.setFromId(index.getFromId());
            conversation.setToId(index.getToId());
        }

        conversation.setMessageId(index.getMessageId());


        saveOrUpdate(conversation);
        return conversation;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean remove(Long id) {
        Conversation conversation = getById(id);
        if (conversation == null) {
            return true;
        }

        remove(id);
        return conversationUnreadService.updateByLastReadMessageId(id, conversation.getMessageId());
    }

    @Override
    public List<Conversation> listByUserId(Long id) {
        return lambdaQuery().eq(Conversation::getFromId, id).list();
    }
}
