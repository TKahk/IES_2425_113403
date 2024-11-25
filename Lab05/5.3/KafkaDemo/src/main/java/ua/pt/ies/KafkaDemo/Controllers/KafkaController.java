package ua.pt.ies.KafkaDemo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.pt.ies.KafkaDemo.Service.KafkaProducerService;
import ua.pt.ies.KafkaDemo.Entity.Message;


@RestController
@RequestMapping("/kafka")
public class KafkaController {

    @Autowired
    private KafkaProducerService producerService;

    @PostMapping("/publish")
    public String publishMessage(@RequestBody Message message) {
        producerService.sendMessage(message);
        return "Message sent to Kafka: " + message;
    }
}