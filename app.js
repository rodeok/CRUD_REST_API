const express = require('express')

const mongoose = require('mongoose')

const app = express()

const PORT = 4000

const alienRouter = require('./routes/aliens')

const dbURI = 'mongodb+srv://favvydon:favvydon@cluster0.huwty.mongodb.net/favvy?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

.then((result)=> console.log('Connected to db'))
.catch((err)=> console.log(err))

app.use('/aliens', alienRouter)

app.listen(PORT, console.log(`Connected to port ${PORT}`))