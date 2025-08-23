const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();


app.use(express.json());
app.use(cors());



app.get('/email', (req, res) => {
    db.query('SELECT * FROM CadastroEmail', (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao buscar emails: ' + err);
        }
        res.status(200).json(result);
    })
})



app.post('/postar', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(500).send('Email é obrigatório')
    }

    db.query('INSERT INTO CadastroEmail (email) VALUES (?)', [email], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar email:' + err);
        }
    })

})


app.delete('/excluir/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send('Id é obrigatório para cancelar a inscrição');
    }

    db.query('DELETE FROM CadastroEmail WHERE Id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao deletar email: ' + err);
        }

        res.status(200).send('Email deletado com sucesso!');
    });
});






app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

