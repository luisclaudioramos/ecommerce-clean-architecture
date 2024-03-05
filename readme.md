# Ecommerce

## Projeto criado com uma arquitetura limpa:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/luisclaudioramos/ecommerce>

# Acesse a pasta do projeto no terminal/cmd
$ cd ecommerce

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🎲 Rodando o Front end (*)

```bash
# Clone este repositório
$ git clone <https://github.com/luisclaudioramos/ecommerce>

# Acesse a pasta do projeto no terminal/cmd
$ cd ecommerce

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🎲 Rodando a Infra (Docker)

```bash
# Instale o Docker e o Docker Composer
# Acesse a pasta do projeto no terminal/cmd
$ cd ecommerce

# Vá para a pasta server
$ cd infra

# Construa a aplicação pela primeira vez
$ docker-compose up --build

# Execute a infra-estrutura
$ docker-compose up

# Para a infra-estrutura
$ docker-compose down

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

Ferramentas principais
=================
<!--ts-->
* [Projeto escrito em: Typescript](#api)
* [API: Express](#api)
* [Banco de dados relacional: Postgresql](#tabela-de-conteudo)
* [Teste Unitário: Jasmine](#instalacao)
* [Camada de validação: Joi](#instalacao)
<!--te-->

### Features

- [x] Cadastro de produtos
- -[x] Pode ser criardo e listado
- -[x] Tem um identificador, nome, descrição, preço, quantidade no estoque, identificador da categoria e tipo (Fisico, Voucher)
- -[x] Produto pode ser paginado.
- [ ] Cadastro de categorias
- -[ ] Pode ser criardo e listado
- -[ ] Tem um identificador e nome
- -[ ] Categoria pode ser paginada.
- [ ] Cadastro de pedidos
- -[ ] Pode ser criardo e listado
- -[ ] Tenha um status, uma lista de produtos, um valor de remessa, um valor total e um peso
- -[ ] O status dos pedidos pode ser pendente, pago ou cancelado
- -[ ] São oferecidos 5% de desconto quando o preço ultrapassa os 1000R$
- -[ ] O envio custa 25€ por cada 50kg (50€ por 100kg, 75€ por 150kg, etc.)
- [ ] Conta
- -[ ] Pode ser listado
- -[ ] Tenha um valor e uma data de criação
- -[ ] Usuário pode ser paginado.
- [ ] Cadastro de usuários
- -[ ] Pode ser criardo e listado
- -[ ] Tem um identificador, nome, email, senha e ativo
- -[ ] São gerados automaticamente quando o status de um pedido é definido como pago


###Casos de sucesso:

- A API retorna o código HTTP 201 quando é bem-sucedida
- API retorna a localização do recurso no cabeçalho Location

### Casos de erro:

- A API retorna o código HTTP 400 quando os dados do produto são inválidos
- API retorna todas as chaves com erro


### Contratos de comunicação:

#### Listagem paginada
```bash
{
  success: true | false,
  data: [Entity],
  page: number,
  perPage: number,
  total: number
}
```
#### Cadastro e edição
```bash
{
  success: true | false,
  error?: {
    fieldName: string,
    message: string
  }[],
  data?: Entity
}
```

![Badge](https://img.shields.io/badge/Ecommerce-LUISCLAUDIO-%237159c1?style=for-the-badge&logo=ghost)