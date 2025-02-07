# Doctoloube

This project do not use any database, data is stored in memory. If you restart the server, all data will be lost.

Delete route is protected by authentication.

## Setup

````
cp .env.example .env
npm install
npm run start
````

## Examples of commands

```
curl -X GET http://localhost:8080/v1/patients
curl -X GET http://localhost:8080/v1/patients/1
curl -X GET http://localhost:8080/v1/patients/abc
curl -X GET http://localhost:8080/v1/patients/999

curl -X POST http://localhost:8080/v1/patients -H "Content-Type: application/json" -d '{"fullname": "John Doe"}'
curl -X POST http://localhost:8080/v1/patients -H "Content-Type: application/json" -d '{}'
curl -X POST http://localhost:8080/v1/patients -H "Content-Type: application/json" -d '{"fullname": "John Doe",}'
curl -X PUT http://localhost:8080/v1/patients/1 -H "Content-Type: application/json" -d '{"fullname": "Jane Doe"}'

curl -X PUT http://localhost:8080/v1/patients/1 -H "Content-Type: application/json" -d '{}'

curl -X DELETE http://localhost:8080/v1/patients/1
curl -X DELETE http://localhost:8080/v1/patients/1 -H "Authorization: <your_token_here>"
```

## Authentication

```
curl -X POST http://localhost:8080/v1/auth/register -H "Content-Type: application/json" -d '{"username": "John Doe", "password": "password"}'
curl -X POST http://localhost:8080/v1/auth/login -H "Content-Type: application/json" -d '{"username": "John Doe", "password": "password"}'
```
