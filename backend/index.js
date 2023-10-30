import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import bookRouter from './routes/books.js'

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`${process.env.MONGO}`)
    .then(()=> {console.log('Connected to DB')})
    .catch((err)=> {console.log(err)})


app.use('/', bookRouter)

app.listen(PORT, () => {
    console.log('Connected to backend ' + PORT)
})