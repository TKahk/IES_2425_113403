package ua.pt.ies.KafkaDemo.Service;

import org.springframework.stereotype.Service;

import ua.pt.ies.KafkaDemo.Entity.Message;

import org.springframework.kafka.annotation.KafkaListener;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "kafka_example", groupId = "group_id")
    public void consume(Message message) {
        System.out.println("Received message: " + message);
    }
    
}
