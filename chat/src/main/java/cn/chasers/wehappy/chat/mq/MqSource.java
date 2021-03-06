package cn.chasers.wehappy.chat.mq;


import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

/**
 * 自定义的output通道，对应 kafka 中的 topic
 *
 * @author lollipop
 */
public interface MqSource {
    String MESSAGE_OUTPUT = "message-output";

    /**
     * message 服务监听并将消息落入 db
     *
     * @return 通道
     */
    @Output(MESSAGE_OUTPUT)
    MessageChannel messageOutput();
}
