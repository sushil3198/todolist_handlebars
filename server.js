const express = require('express')
const app = express()
const todoRoute = require('./routes/todo')

app.set('view engine', 'hbs')
app.set('views',__dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/todos',todoRoute)

app.listen(8866)