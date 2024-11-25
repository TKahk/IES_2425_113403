# Exercício 5.1 - Configure Apache Kafka with Docker 

## 1. Start the Kafka cluster
1. Create a docker-compose.yml file
2. docker-compose up --build
2. docker exec lab05-kafka-1 kafka-topics --create --topic lab05 --partitions 1 --replication-factor 1 --bootstrap-server kafka:9092 // Response: Created topic lab05.

## 2. Start a consumer
1. docker exec lab05-kafka-1 kafka-console-consumer --topic lab05 --from-beginning --bootstrap-server kafka:9092 // --from-beginning: Start reading at the beginning of the log.
2. docker exec -it lab05-kafka-1 bash // Access the container.
3. kafka-console-producer --topic lab05 --broker-list kafka:9092
4. Type a message and press Enter. // If you type a message in the producer terminal, you will see it in the consumer terminal.
5. exit // Exit the container.

# Exercício 5.2 - Create a producer and a consumer
1. Create a Poetry project: poetry new poetry-demo
2. Add the dependencies to the pyproject.toml file
3. poetry install
4. Create a producer and a consumer in the src directory
5. Run the producer and the consumer by running the following commands:
    - poetry run python poetry_demo/producer_example.py
    - poetry run python poetry_demo/consumer_example.py

// The last message is Received message: {"nMec": "99999", "generatedNumber": 144, "type": "fibonacci"}

// If you run the consumer multiple times, does it read all the messages? Why?
// No, because the consumer reads the messages from the beginning of the log. If you want to read all the messages, you need to create a new consumer group.

# Exercício 5.3 - Create a consumer in Java integrated with Spring Boot
1. Create a new Spring Boot project using the Spring Initializr with the following dependencies:
    - Spring Web
    - Spring for Apache Kafka
2. Create a Message entity
3. Create a KafkaConsumerService
4. Add the required properties to the application.properties file

# Exercício 5.4 - Wrapping-up and integrating concepts

1. Copy exercise 4.4 from the previous lab to the current project
2. copy the poetry_demo project and alter the producer to send the messages to the Kafka cluster
3. Create a consumer in Java integrated with Spring Boot to consume the messages from the Kafka cluster
4. Implement the frontend to show the new messages in real-time


## Importante
1. Não consegui dockerizar o 5.4
