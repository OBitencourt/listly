// requisições base

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin: '*' }));


// configuring server to receive datas in json

app.use(express.json())

// requisições criadas

const db = require('./database/db')
const routes = require('./routes/routes')


// conectando ao banco de dados

db.connect()

// rotas

app.use('/listly', routes)

//




// 404 error (not found)

app.use('/', (req, res) => {
    res.send('Página não encontrada!')
})


// server listening

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))