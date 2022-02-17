const express = require('express')
const router = require('./routes')
const app = express()
const PORT = 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`running on PORT: ${PORT}`)
})