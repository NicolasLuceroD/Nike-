import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


const MainUsuarios = () => {

  const[id_usuario,setIdUsuario] = useState(null)
  const[nombre_usuario,setNombreUsuario] = useState('')
  const[clave_usuario ,setClaveUsuario] = useState("")
  const[estado_usuario,setEstadoUsuario] = useState(1)
  const[editar,setEditar] = useState(false)
  const[usuariosList,setUsuariosList] = useState([])

  
  const verUsuarios = () =>{
    axios.get ("http://localhost:3001/usuarios").then((response)=>{
      setUsuariosList(response.data)
    })
  }


  const agregarUsuario = () =>{
    axios.post("http://localhost:3001/usuarios/post",{
      id_usuario:id_usuario,
      nombre_usuario:nombre_usuario,
      clave_usuario:clave_usuario,
      estado_usuario:estado_usuario,
      
    }).then(()=>{
      verUsuarios()
      limpiarCampos()
      Swal.fire({
        title: " <strong>Registro exsitoso!</strong>",
        html: "<i>El producto <strong> "+nombre_usuario+" </strong> fue registrado con exito</i>",
        icon: 'success',
        timer:3000
      })
    })
  } 

  const editarUsuarios = (e) =>{
    e.preventDefault()
      axios.put(`http://localhost:3001/usuarios/put/${id_usuario}`,{
        id_usuario:id_usuario,
        nombre_usuario:nombre_usuario,
        clave_usuario:clave_usuario,
        estado_usuario:estado_usuario          
    }).then(()=>{
      limpiarCampos()
      verUsuarios()
      Swal.fire({
        title: " <strong>Actualizacion exsitosa!</strong>",
        html: "<i>El producto <strong> "+nombre_usuario+" </strong> fue actualizado con exito</i>",
        icon: 'success',
        timer:3000
      })
    });
  }

  const eliminarUsuarios = (val) =>{
    Swal.fire({
      title: 'Confirmar eliminacion?',
      html: "<i>Realmente desea eliminar el registro <strong>"+val.nombre_usuario+"</strong> </strong></i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete (`http://localhost:3001/usuarios/delete/${val.id_usuario}`,{
        }).then(()=>{
          limpiarCampos()
          verUsuarios() 
          Swal.fire(
            'Eliminado!',
            val.nombre_usuario+'fue eliminado.',
            'success',
          )   
        });      
      }
    });   
  }

  
  const updateUsuario = (val) =>{ 
    setEditar(true)   
    setIdUsuario(val.id_usuario)
    setNombreUsuario (val.nombre_usuario)
    setClaveUsuario(val.clave_usuario)  
    setEstadoUsuario(val.estado_usuario) 
  }



  const limpiarCampos = () => {
    setEditar(false)   
    setIdUsuario("")
    setNombreUsuario ("")
    setClaveUsuario("")  
    setEstadoUsuario(1) 
}



useEffect (()=>{

  verUsuarios();
},[]);







  return (
   
    <form action="" onSubmit={editarUsuarios}>
     <br/>
        <div className="card text-center">
          <div className="card-header">
              GESTION DE USUARIOS
          </div>
            <div className="card-body"> 
              {/* <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Id Producto:</span>
                <input type="text" 
                  onChange={(e)=>setIdProducto(e.target.value)}                
                className="form-control" value={id_producto} placeholder="Ingrese el id del producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>  */}
              
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Id Usuario:</span>
                <input type="text" 
                  onChange={(e)=>setIdUsuario(e.target.value)}                
                className="form-control" value={id_usuario} placeholder="Ingrese el id del usuario" aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 
              
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                <input type="text" 
                  onChange={(e)=>setNombreUsuario(e.target.value)}                
                className="form-control" value={nombre_usuario} placeholder="Ingrese un nombre del usuario" aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Clave:</span>
                <input type="number" 
                  onChange={(e)=>setClaveUsuario(e.target.value)}     
                className="form-control" value={clave_usuario}  placeholder="ingrese la clave del usuario" aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Estado:</span>
                <input type="text" value={estado_usuario}
                 onChange={(e)=>setEstadoUsuario(e.target.value)}               
                className="form-control"  placeholder="ingrese el estado del usuario" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

             
        

          </div>    
            <div className="card-footer text-muted">
              {
                editar ?  
                <div>
                  <button type="submit" className='btn btn-warning m-2' onClick={editarUsuarios}>Actualizar</button> 
                  <button type="submit" className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button> 
                </div>
                : <button type="submit" className='btn btn-success' onClick={agregarUsuario}>Registrar</button>
              }
            </div>
      </div>
      <br/><br/>

      <table className="table table-striped">
              <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre del usuario</th>
              <th scope="col">Clave del usuario</th>
              <th scope="col">Estado del usuario</th>
              
            </tr>
          </thead>
          
          <tbody>            
          {
            usuariosList.map((val,key)=>{
             return <tr key={val.id_usuario}>   
                      <td>{val.id_usuario}</td>       
                      <td>{val.nombre_usuario}</td>
                      <td>{val.clave_usuario}</td>
                      <td>{val.estado_usuario}</td>
                
                      <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={()=>{
                          updateUsuario(val)
                        }} className="btn btn-info" >Editar</button>
                        <button type="button" onClick={()=>{
                          eliminarUsuarios(val)
                          }} className="btn btn-danger">Eliminar</button> 
                      </div>
                      </td>
                    </tr>                                                                               
            })
          }           
          </tbody>
      </table>
      <br/><br/>
  </form>
  )
}

export default MainUsuarios