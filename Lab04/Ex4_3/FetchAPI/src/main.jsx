curl -X POST http://localhost:8080/api/cars \
-H "Content-Type: application/json" \
-d '{
    "teamName": "Mercedes",
    "teamColor": "Silver",
    "tyreTemp": [80.0, 85.0, 90.0, 75.0],
    "location": [10, 20],
    "position": 1,
    "currentLap": 5,
    "tyreType": "Soft",
    "fuelLevel": 50.5,
    "currentSpeed": 200.0,
    "lapTime": [55.2]
    "driver": {
        "driverNumber": 10
    }
}'

