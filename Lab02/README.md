mvn exec:java -Dexec.mainClass="ua.pt.IESlab2.EmbeddedJettyExample"

- Aceder ao localhost
http://127.0.0.1:8680/ -> à print a default message 
http://127.0.0.1:8680/?msg=”Hard workers welcome!” -> print the msg parameter 
http://127.0.0.1:8680/?msg=%22Hard%20workers%20welcome!%22 -> the same; special characters “escaped” 


- Jakarta EE

docker-compose.yml: configura um serviço Tomcat usando a imagem tomcat:9.0.41-jdk8-openjdk, mapeia a porta 8080 do host para a porta 8080 do contêiner e monta o diretório local ./target no diretório webapps do Tomcat dentro do contêiner.

-Comandos para executar o serviço Tomcat:
docker-compose up -d
docker-compose down

- Spring Boot

Porta default: 8080
./mvnw spring-boot:run

Definir páginas
@GetMapping("/")

Para testar o RestController, use o comando curl:
curl http://localhost:5050/greeting?name=%22Pedro%22

