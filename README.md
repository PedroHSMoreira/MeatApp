# MeatApp

Projeto desenvolvido no curso  [Construindo Aplicações Web Com o Novo Angular (4, 5 e 6)](https://www.udemy.com/course/angular-pt/).

Atualizado para versão 8.3.4 e com alguns implementos.

# Imagem Docker

## Requisitos 
- [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- Docker Compose
    - ```$ sudo apt install docker-compose```

Após o "git clone" devemos executar o seguinte comando na raiz do projeto:
```shell
$ docker-compose up -d --build 
```

Após a construção da *imagem* e o *container* estiver operando, podemos acessar no navegador [http://localhost:8081](http://localhost:8081) para acessar a aplicação.

> O container docker utiliza o nginx para hospedar o build de produção da aplicação.
# Executar o servidor

Para excutar o servidor, devemos usar o seguinte comando no terminal:
```shell
$ npm run server
```

Estará disponível em http://localhost:3001.

