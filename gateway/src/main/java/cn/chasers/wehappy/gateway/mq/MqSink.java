package cn.chasers.wehappy.gateway.mq;


import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;
import org.springframework.stereotype.Component;

/**
 * 自定义的 input 通道，对应 kafka 中的 topic
 *
 * @author lollipop
 */
@Component
public interface MqSink {

    String PUSH_MESSAGE_INPUT = "push-message-input";

    /**
     * 监听推送消息的通道
     *
     * @return 通道
     */
    @Input(MqSink.PUSH_MESSAGE_INPUT)
    SubscribableChannel pushMessageInput();
}
