const path   = require('path')
//obtenemos el path
const public = path.join(__dirname, '../public')
const express= require('express')

let port = process.env.PORT || 3000

let app = express()
//path a la carpeta publica de estaticos
app.use(express.static(public))

app.listen(port, ()=> console.log("runnin" + port))