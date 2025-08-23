const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: 'root',
    database: 'NewsLetter'
});

connection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    else{
        console.log('Conectado ao banco de dados com sucesso!')
    }
});

module.exports = connection;