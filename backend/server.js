require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const teamMembersRoutes = require('./routes/teamMembers')

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to mongodb')
}).catch(e => {
    console.log('mongodb error: ' + e)
})

app.use('/api/team-members', teamMembersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server listening on ${process.env.PORT}`)
});