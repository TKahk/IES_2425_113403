package ua.pt.ies.KafkaDemo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import ua.pt.ies.KafkaDemo.Entity.Message;

@Service
public class KafkaProducerService {
    private static final String TOPIC = "kafka_example";

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

    public void sendMessage(Message message) {
        kafkaTemplate.send(TOPIC, message);
        System.out.println("Message sent: " + message);
    }
}
