const {connection} = require("../database/config")




const verBotines = (req,res) =>{
    connection.query("SELECT * FROM producto WHERE id_categoria = 4 " ,(error,results)=>{
        if(error) throw error    
      res.json(results)     
    })
}

const crearBotines = (req,res) => {
    connection.query("INSERT INTO producto SET ?",
    {
        id_producto: req.body.id_producto,
        id_categoria: req.body.id_categoria,
        nombre_producto: req.body.nombre_producto,
        precio_producto: req.body.precio_producto,
        tipo_producto: req.body.tipo_producto,
        descripcion_producto: req.body.descripcion_producto,
        estado_producto: req.body.estado_producto,
    },
      (error,results)=>{
        if(error) throw error;
        res.json(results)
      }  
    )
}

const editarBotines = (req, res) => {
  const id_producto = req.params.id_producto;
  const {id_categoria,nombre_producto,precio_producto,tipo_producto,descripcion_producto,estado_producto} = req.body
  connection.query(`UPDATE Producto SET 
                                  id_categoria= '${id_categoria }',
                                  nombre_producto= '${nombre_producto}',
                                  precio_producto= '${precio_producto}',
                                  tipo_producto= '${tipo_producto}',
                                  descripcion_producto= '${descripcion_producto}',
                                  estado_producto= '${estado_producto}'

                                  WHERE id_producto = ${id_producto}
  `,(error, results) => {
     if (error) throw error;
     res.json(("Producto Actualizado"));
  })
}


const eliminarBotines = (req,res)=>{
    const id_producto = req.params.id_producto; 
    connection.query("DELETE FROM Producto WHERE id_producto = " + id_producto,
    
      (error,results)=>{
        if(error) throw error;
        res.json(("Producto Eliminado"))
      }
    )
}




const inerjoin = (req,res) =>{
  const id_categoria = req.params.id_categoria; 
  connection.query(`
                      SELECT P.nombre_producto,  P.precio_producto, C.descripcion_categoria
                      FROM producto P 
                      INNER JOIN categoria C
                      ON C.id_categoria = P.id_categoria`)+id_categoria,
    (error,results)=>{
      if(error) throw error
      res.json(results)
    }


}


const ver = (req,res) =>{
  connection.query("SELECT * FROM productos WHERE id_categoria = 4",
  
  (error,results)=>{
    if(error) throw error;
    res.json(results)
  }
  
  )
}


const crear = (req,res)=>{
  connection.query("INSERT INTO productos SET ?",
  
  {
    id_producto: req.body.id_producto,
    id_categoria: req.body.id_categoria,
    nombre_producto: req.body.nombre_producto,
    precio_producto: req.body.precio_producto,
    tipo_producto: req.body.tipo_producto,
    descripcion_producto: req.body.descripcion_producto,
    estado_producto: req.body.estado_producto,
  },

  (error,results) => {
    if(error) throw error;
    res.json(results)
  }
  
  )
}


const actualizar = (req,res) =>{
  const id_producto = req.params.id_producto
  const {id_categoria,nombre_producto, precio_producto,tipo_producto,descripcion_producto,estado_producto} =req.body
  connection.query(`UPDATE producto SET ?
                                        id_categoria = ${id_categoria},
                                        nombre_producto = ${nombre_producto},
                                        precio_producto = ${precio_producto},
                                        tipo_producto = ${tipo_producto},
                                        descripcion_producto = ${descripcion_producto},
                                        estado_producto = ${estado_producto},

                                        WHERE id_producto = ${id_producto}
                                              
                                        
                                        `, (error,results)=>{
                                          if(error) throw error;
                                          res.json(results)
                                        })

}

const eliminar = (req,res)=>{
  const id_producto = req.params.id_producto
  connection.query("DELETE FROM producto WHERE id_producto =" +id_producto, 
  
  (error)=>{
    if(error) throw error;
    res.json(("producto eliminado"))

  }
 
  
  )

}


module.exports = {verBotines,crearBotines,editarBotines,eliminarBotines, inerjoin}