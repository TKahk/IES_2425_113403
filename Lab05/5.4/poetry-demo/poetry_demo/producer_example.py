import time
import random
import json
import logging
from kafka import KafkaProducer

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

try:
    # Initialize Kafka Producer
    producer = KafkaProducer(
        bootstrap_servers='localhost:29092',  # Kafka broker address
        value_serializer=lambda v: json.dumps(v).encode('utf-8')
    )

    # Movies data to be sent to Kafka
    movies_data = [
        {"title": "The Matrix", "year": 1999},
        {"title": "Inception", "year": 2010},
        {"title": "The Godfather", "year": 1972},
        {"title": "The Dark Knight", "year": 2008}
    ]

    # Produce movie messages
    for movie in movies_data:
        try:
            producer.send(
                'movies-topic', 
                value=movie, 
                headers=[('__TypeId__', 'ua.pt.Movies.Entities.Movie'.encode('utf-8'))]
            )
            logging.info(f"Sent movie: {movie['title']} ({movie['year']})")
        except Exception as e:
            logging.error(f"Error sending movie: {movie['title']} - {e}")
        time.sleep(random.randint(3, 5))

    # Quotes data to be sent to Kafka
    quotes_data = [
        {"quote": "The Matrix has you.", "movieId": 1},
        {"quote": "Do you want to know the secret?", "movieId": 2},
        {"quote": "I'm going to make him an offer he can't refuse.", "movieId": 3},
        {"quote": "Why so serious?", "movieId": 4}
    ]

    # Produce quote messages
    for quote in quotes_data:
        try:
            producer.send(
                'quotes-topic', 
                value=quote, 
                headers=[('__TypeId__', 'ua.pt.Movies.Entities.Quote'.encode('utf-8'))]
            )
            logging.info(f"Sent quote for movieId: {quote['movieId']} - {quote['quote']}")
        except Exception as e:
            logging.error(f"Error sending quote: {quote['quote']} - {e}")
        time.sleep(random.randint(3, 5))

except Exception as e:
    logging.critical(f"Failed to initialize Kafka producer: {e}")

finally:
    # Ensure producer is flushed and closed
    if 'producer' in locals():
        producer.flush()
        producer.close()
        logging.info("Kafka producer closed.")
