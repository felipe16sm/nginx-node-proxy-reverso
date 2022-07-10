# Sobre o desafio

O objetivo desse desafio é criar um servidor web com proxy reverso rodando na porta 8080 em localhost utilizando docker compose. As tecnologias utilizadas nesse projeto são: 

<ul>
  <li>Nginx - Servidor HTTP</li>
  <li>NodeJS - Backend</li>
  <li>MySQL - Banco de dados</li>
</ul>

# Instalação e execução

Para instalar e executar a aplicação basta executar o seguinte comando no terminal de comandos na pasta do projeto:

```
docker-compose up -d
```

# Utilização da aplicação

Para utilizar a aplicação basta acessar:

```
http://localhost:8080/
```

<p>Ao nesse endereço será criado um nome aleatório e adicionado ao banco de dados. Em seguida será mostrada na tela todos os ids e nomes gravados no banco de dados. Cada vez que esse endereço é acessado, um novo nome será adicionado ao banco de dados.</p>

<p>Observação: Acesse o endereço após uns 45 segundos depois que o comando docker-compose up -d terminar de rodar pela primeira vez para dar tempo de todos os serviços estarem executando. Nas execuções seguintes basta esperar uns 20 segundos.</p>
