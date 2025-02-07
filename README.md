## Setup

````
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
```
