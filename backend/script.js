const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();


app.use(express.json());
app.use(cors());


// Rota para cadastrar email

app.post('/postar', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email é obrigatório');
    }

    db.query('SELECT * FROM CadastroEmail WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao verificar email: ' + err);
        }

        if (results.length > 0) {
            return res.status(409).json({ message: 'Email já cadastrado, use outro!' });
        }

        db.query('INSERT INTO CadastroEmail (email) VALUES (?)', [email], (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao cadastrar email: ' + err);
            }

            return res.status(200).send('Email cadastrado com sucesso!' + results);
        });
    });
});


// Rota para descadastrar email

app.delete('/excluir/:email', (req, res) => {
    const { email } = req.params;

    if (!email) {
        return res.status(400).send('Email é obrigatório para cancelar a inscrição');
    }

    db.query('DELETE FROM CadastroEmail WHERE Email = ?', [email], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao deletar email: ' + err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Email não encontrado');
        }

        res.status(200).send('Email deletado com sucesso!');
    });
});





// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

