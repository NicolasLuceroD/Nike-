const {connection} = require('../database/config')

const todosUsuarios = (req,res)=>{
    connection.query("SELECT * FROM usuario", (error,results)=>{
        if(error) throw error
        res.json(results)
    });
}




const crearUsuario = (req, res) => {
    connection.query("INSERT INTO usuario SET ?",
    {
       id_usuario: req.body.id_usuario,
       nombre_usuario: req.body.nombre_usuario,
       clave_usuario: req.body.clave_usuario,
       estado_usuario:req.body.estado_usuario
    }, 
   
    (error, results) => {
       if (error) throw error;
       res.json(("Usuario registrado"));
    })
    
}

const actualizarUsuario = (req,res)=>{
    const id_usuario = req.params.id_usuario
    const{nombre_usuario,clave_usuario,estado_usuario} = req.body
    connection.query(`UPDATE usuario SET
                                            
                                    nombre_usuario = '${nombre_usuario}',
                                    clave_usuario = '${clave_usuario}',
                                    estado_usuario ='${estado_usuario}'

                                    WHERE id_usuario = ${id_usuario}
    
    `,(error,results)=>{
        if(error) throw error
        res.json(("Usuario actualizado"))
    })
}




const eliminarUsuario = (req,res)=>{
    const id_usuario = req.params.id_usuario;
    connection.query("DELETE FROM Usuario WHERE id_usuario = " + id_usuario,
    
    (error, results) => {
        if (error) throw error
        res.json("Registro Eliminado");
        console.log("Registro Eliminado");
      
       });
      }

module.exports = {actualizarUsuario, eliminarUsuario, crearUsuario, todosUsuarios}