const path   = require('path')
//obtenemos el path
const public = path.join(__dirname, '../public')
const express= require('express')

let app = express()
//path a la carpeta publica de estaticos
app.use(express.static(public))

app.listen(3000, ()=> console.log("running"))