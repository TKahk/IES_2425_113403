# LAB3

- Exercício 3.1
Perguntas:
1. The “UserController” class gets an instance of “userRepository” through its constructor; how is this new repository instantiated?
R: O userRepository é instanciado por meio do framework de injeção de dependência do Spring. No construtor da classe UserController, a instância do userRepository é injetada pelo container do Spring, que cria e gerencia automaticamente os beans. Essa injeção é realizada através da injeção por construtor, permitindo que o UserController acesse o repositório sem precisar instanciá-lo manualmente.

2. List the methods invoked in the “userRepository” object by the “UserController”. Where are these methods defined?
R: O UserController geralmente invoca métodos como findAll(), findById(), save() e deleteById() no userRepository. Esses métodos estão definidos nas interfaces JpaRepository ou CrudRepository do Spring Data JPA, que o userRepository provavelmente estende. Ao estender essas interfaces, o userRepository herda suas implementações, permitindo que o controlador os chame diretamente.

3. Where is the data being saved?
R: Os dados são guardados num banco de dados configurado nas propriedades da aplicação (no arquivo application.properties).

4. Where is the rule for the “not empty” email address defined?
R: A regra para que o endereço de e-mail não seja vazio está definida no nível da entidade, dentro da classe User.(@NotBlank)



- Exercício 3.2
Comando para criar o container do MySQL no dirétorio do Lab para funcionar para todos os exercícios:
docker run --name mysql6 -e MYSQL_ROOT_PASSWORD=secret1 -e MYSQL_DATABASE=demo -e MYSQL_USER=demo -e MYSQL_PASSWORD=secret2 -p 33060:3306 -d mysql/mysql-server:5.7

1. mvn spring-boot:run
2. Ver todos os usuários ou um usuário específico:
curl http://localhost:8080/api/users/{id}
3. Adicionar um usuário:
curl -X POST http://localhost:8080/api/users \
-H "Content-Type: application/json" \
-d '{"firstName": "pedro", "lastName": "salgado", "email": "xdd"}' 
4. Update de um usuário:
curl -X PUT http://localhost:8080/api/users/{id} \
-H "Content-Type: application/json" \
-d '{"firstName": "pedro", "lastName": "salgado", "email": "abcd"}'
5. Deletar um usuário:
curl -X DELETE http://localhost:8080/api/users/{id}
6. Procurar por um usuário com o email:
curl http://localhost:8080/api/users/email?email={email}


- Exercício 3.3 (Tá a dar erro)

### Organização do projeto
└── project
          ├── Application.java
          ├── Controllers
          │   └── Controller.java
          ├── Entities
          │   ├── Movie.java
          │   └── Quote.java
          ├── Repository
          │   ├── MovieRepository.java
          │   └── QuoteRepository.java
          └── Services
              ├── MovieServiceInterface.java
              ├── MovieService.java
              ├── QuoteServiceInterface.java
              └── QuoteService.java

1. Adicionar uma Quote:
curl -X POST http://localhost:8080/quote
2. Adicionar um Movie:
curl -X POST http://localhost:8080/movie
3. Verificar todas as Quotes:
curl http://localhost:8080/quotes
4. Verificar todas os Movies:
curl http://localhost:8080/movies

