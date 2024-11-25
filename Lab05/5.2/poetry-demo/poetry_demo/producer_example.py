from kafka import KafkaProducer
import json
import time

# Kafka Configuration
bootstrap_servers = 'localhost:29092'  # Replace with your Kafka broker address
topic_name = 'your_topic_name'  # Replace with the topic you want to produce to

# Create a Kafka producer instance
producer = KafkaProducer(
    bootstrap_servers=bootstrap_servers,
    value_serializer=lambda v: json.dumps(v).encode('utf-8')  # Serialize Python objects to JSON
)

# Message Format
nMec = '99999'  # Replace with your desired nMec value
message_type = 'fibonacci'  # Message type
fibonacci_sequence = [1, 1]  # Starting Fibonacci sequence

# Produce messages to the Kafka topic
for i in range(10):  # Generate 10 messages
    # Generate the next Fibonacci number
    generated_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
    fibonacci_sequence.append(generated_number)

    # Create the message in the specified format
    message = {
        'nMec': nMec,
        'generatedNumber': generated_number,
        'type': message_type
    }

    # Send the message
    print(f"Sending message: {message}")
    producer.send(topic_name, value=message)

# Close the producer connection
producer.close()
print("All messages sent successfully!")
