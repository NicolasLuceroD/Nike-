const {connection} = require("../database/config")


const todosCategoria = (req,res)=>{
    connection.query("SELECT * FROM categoria ",
    (error,results)=>{
        if(error)throw error;
        res.json(results)
    }
    )
}


const crearCategoria = (req,res) =>{
    connection.query("INSERT INTO categoria SET ?",
    {
        id_categoria:req.body.id_categoria,
        descripcion_categoria:req.body.descripcion_categoria,
        estado_categoria:req.body.estado_categoria

    }, 
        (error,results) =>{
        if(error) throw error
        res.json(results)
    }
    )     
}

const actualizarCategoria = (req,res) =>{
    const id_categoria = req.params.id_categoria
    const{descripcion_categoria,estado_categoria} = req.body
    connection.query(`UPDATE categoria SET 
                                       descripcion_categoria = '${descripcion_categoria}',
                                       estado_categoria = '${estado_categoria}'

                                       WHERE id_categoria = ${id_categoria}
    
    
    `, (error,results)=>{
        if(error) throw error
        res.json(results)

    })
}


const eliminarCategoria = (req,res) => {
    const id_categoria = req.params.id_categoria
    connection.query("DELETE FROM categoria WHERE id_categoria = "+id_categoria,
    (error,results)=>{
        if(error)throw error
        res.json(results)
    }
    )
}


module.exports = {todosCategoria,crearCategoria,actualizarCategoria,eliminarCategoria}