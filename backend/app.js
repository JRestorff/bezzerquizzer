const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/test', (req, res) => {
    res.send({answer: 'Hello Joerg!'})
})

app.listen(port, () => {
    console.log(`Example app listening app http://localhost:${port}`)
})