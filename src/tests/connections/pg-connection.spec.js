const pg = require('pg');

const connectionString = 'postgres://postgres:my-pass-ecommerce@localhost:5432/my-ecommerce';

const client = new pg.Client(connectionString);

client.connect()
    .then(() => {
        console.log('Conectado ao banco de dados PostgreSQL!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
    });


client.query('SELECT * FROM products')
    .then(result => {
        console.log('Resultado da consulta:', result.rows);
    })
    .catch(err => {
        console.error('Erro ao executar a consulta SQL:', err);
    });

client.end();