package cn.chasers.wehappy.message.mq;

import cn.chasers.wehappy.common.msg.ProtoMsg;
import cn.chasers.wehappy.message.service.IMessageService;
import com.google.common.primitives.Bytes;
import com.google.protobuf.InvalidProtocolBufferException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

/**
 * Kafka消费者
 *
 * @author lollipop
 */
@Slf4j
@EnableBinding(MqSink.class)
public class Consumer {
    private final IMessageService messageService;

    @Autowired
    public Consumer(IMessageService messageService) {
        this.messageService = messageService;
    }

    /**
     * 监听kafka中消息主题
     *
     * @param bytes 消息
     */
    @StreamListener(MqSink.MESSAGE_INPUT)
    public void receivePushMessage(byte[] bytes) {
        try {
            ProtoMsg.Message message = ProtoMsg.Message.parseFrom(bytes);
            log.info("fetch message: {}", message);
            messageService.save(message);
        } catch (InvalidProtocolBufferException e) {
            e.printStackTrace();
        }
    }
}
