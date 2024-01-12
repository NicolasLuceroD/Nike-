const {connection} = require("../database/config")


//--Para llamar a todos los Registros de Camisetas--//
const todos = (req, res) => {
    connection.query("SELECT * FROM producto WHERE id_categoria = 3", (error, results) => {
            if (error) throw error;
            res.json(results);
     });
}

//--Para Crear un Registro-------------------//
const crear = (req, res) => {
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
   
    (error, results) => {
       if (error) throw error;
       res.json("Producto agregado");
    })
}


//--Paso por paramatros el id, y el Body--//

const editar = (req, res) => {
    const id_producto = req.params.id_producto;
    const {id_categoria,nombre_producto,precio_producto,tipo_producto,descripcion_producto,estado_producto} = req.body
    connection.query(`UPDATE producto SET 
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

//--Para Elimnar un Registro----------------//

const eliminar = (req,res)=>{
    const id_producto = req.params.id_producto;
    connection.query("DELETE FROM producto WHERE id_producto = " + id_producto,
    
    (error, results) => {
        if (error) throw error
        res.json("Registro Eliminado");
        console.log("Registro Eliminado");
      
       });
      }
//--Exportar los módulos para su implementación---//

module.exports={crear,todos,editar,eliminar}