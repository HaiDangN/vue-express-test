console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
// Cors allows server to be hosted on a different domain and 
// allows people from around the world to use it
// security risk
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
         message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)