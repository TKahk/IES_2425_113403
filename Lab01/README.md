# LAB01

## Exercício 1.2

pom.xml - Ficheiro de configuração do Maven, que contém as dependências necessárias para o projeto.
GroupID - Identificador do grupo do projeto.
ArtifactID - Identificador do projeto(é o nome do projeto).

### Comandos Maven

- mvn package - Compila o projeto e gera o ficheiro .jar.
- mvn clean - Limpa o diretório target.
- mvn install - Instala o projeto no repositório local.
- mvn exec:java -Dexec.mainClass="com.mycompany.app.App" -Dexec.args="argumento" Executa a classe App.

### Comandos docker portainer

- docker container start portainer - Inicia o container portainer.
- docker container stop portainer - Para o container portainer.
- docker image build -t docker-java-jar:latest .
- docker run docker-java-jar:latest 




