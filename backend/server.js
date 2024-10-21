// requisições base

const express = require('express')
const cors = require('cors')

// requisições criadas

const db = require('./database/db')


// conectando ao banco de dados

db.connect()

// rotas

//

const app = express()


app.use(cors())

// configuring server to receive datas in json

app.use(express.json())

// 404 error (not found)

app.use('/', (req, res) => {
    res.send('Página não encontrada!')
})


// server listening

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))