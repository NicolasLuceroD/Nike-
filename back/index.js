//--Modulo de express--------------//
const express = require('express')
const cors = require('cors')


//--Agregamos la ruta de la conexion a la base de datos--//
const {connection} = require('./database/config')

//--Instanciamos la Ruta hacia --//
const zapatilla = require ("./Routes/zapatillas")

const botines = require("./Routes/botines")

const pantalones = require("./Routes/pantalones")

const camisetas = require("./Routes/camisetas")

const categoria = require("./Routes/categoria")

const usuarios = require("./Routes/usuarios")


//-----APP-----------------/
const app = express()
app.use(express.json())
app.use(cors())

//--Usamos la ruta hacia /pantalones
app.use("/", pantalones)

//--Usamos la ruta hacia /zapatillas--//
app.use("/", zapatilla)

//--Usamos la ruta hacia /botines--//
app.use("/", botines)

//--Usamos la ruta hacia /camisetas--//
app.use("/", camisetas)

//--Usamos la ruta hacia /categoria--//
app.use("/",categoria)

//--Usamos la ruta hacia /usuarios--//
app.use("/", usuarios)



//Puerto localHost de la api rest//
app.listen(3001)

 

//--Verificacion de la conxexion a la Base de Datos--//
connection.connect((error) => {
    if ( error) throw error;
    console.log("Conexion establecida con la Base de Datos")
});

