import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'

const MainCamiseta = () => {

  const[id_producto,setIdProducto] = useState(null)
  const[id_categoria,setIdCategoria] = useState(3)
  const[nombre_producto,setNombreProducto] = useState("")
  const[precio_producto,setPrecio] = useState("")
  const[tipo_producto,setTipoProducto] = useState("")
  const[descripcion_producto,setDescripcionProducto] = useState("")
  const[estado_producto,setEstado] = useState(1)
  const[editar,setEditar] = useState(false)
  const[camisetaList,setCamiseta] = useState([])

 
    //TRAER TODAS LAS CAMISETAS
    const verCamisetas = () =>{
      axios.get ("http://localhost:3001/camisetas").then((response)=>{
        setCamiseta(response.data)
      });
    }

    //CREAR
    const agregarCamiseta = ()=>{
      axios.post("http://localhost:3001/camisetas/post",{
        id_producto:id_producto,
        id_categoria:id_categoria,
        nombre_producto:nombre_producto,
        precio_producto:precio_producto,
        tipo_producto: tipo_producto,
        descripcion_producto:descripcion_producto,
        estado_producto:estado_producto
      }).then(()=>{
        verCamisetas()
        limpiarCampos()
        Swal.fire({
          title: " <strong>Registro exsitoso!</strong>",
          html: "<i>El producto <strong> "+nombre_producto+" </strong> fue registrado con exito</i>",
          icon: 'success',
          timer:3000
        })
      });
    } 

    //EDITAR
    const editarCamiseta = (e) =>{
      e.preventDefault()
  
        axios.put(`http://localhost:3001/camisetas/put/${id_producto}`,{
        id_producto:id_producto,
        id_categoria:id_categoria,
        nombre_producto:nombre_producto,
        precio_producto:precio_producto,
        tipo_producto: tipo_producto,
        descripcion_producto:descripcion_producto,
        estado_producto:estado_producto
        
      }).then(()=>{
        limpiarCampos("")
        verCamisetas()
        Swal.fire({
          title: " <strong>Actualizacion exsitosa!</strong>",
          html: "<i>El producto <strong> "+nombre_producto+" </strong> fue actualizado con exito</i>",
          icon: 'success',
          timer:3000
        })
      });
    }

  //UPDATE
  const updateCamiseta= (val) =>{ 
    setEditar(true)   
    setIdProducto(val.id_producto)
    setIdCategoria (val.id_categoria)
    setNombreProducto(val.nombre_producto)  
    setPrecio(val.precio_producto)
    setTipoProducto(val.tipo_producto)
    setDescripcionProducto(val.descripcion_producto)
    setEstado(val.estado_producto)     
  }

  // ELIMINAR
  const eliminarCamiseta = (val) =>{
    Swal.fire({
      title: 'Confirmar eliminacion?',
      html: "<i>Realmente desea eliminar el registro <strong>"+val.nombre_producto+"</strong> </strong></i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete (`http://localhost:3001/zapatillas/delete/${val.id_producto}`,{
        }).then(()=>{
          limpiarCampos()
          verCamisetas() 
          Swal.fire(
            'Eliminado!',
            val.nombre_producto+'fue eliminado.',
            'success',
          )   
        });      
      }
    });   
  }

    const limpiarCampos = () => {
      setEditar(false)   
      setIdProducto('')
      setIdCategoria (3)
      setNombreProducto('')  
      setPrecio('')
      setTipoProducto("")
      setDescripcionProducto('')
      setEstado(1)
  }
  
     //VER
  useEffect (()=>{
  verCamisetas();
},[]);


  return (
    <div className='fondo'>

    <form action="" onSubmit={editarCamiseta}>
     <br/>
        <div className="card text-center">
          <div className="card-header">
              GESTION DE CAMISETAS
          </div>
            <div className="card-body">     
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Id Categoria:</span>
                <input type="text" 
                  onChange={(e)=>setIdCategoria(e.target.value)}                
                className="form-control" value={id_categoria} placeholder="Ingrese el id Categoria" aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 
              
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                <input type="text" 
                  onChange={(e)=>setNombreProducto(e.target.value)}                
                className="form-control" value={nombre_producto} placeholder="Ingrese un nombre del producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Precio:</span>
                <input type="number" 
                  onChange={(e)=>setPrecio(e.target.value)}     
                className="form-control" value={precio_producto}  placeholder="ingrese el precio del producto " aria-label="Username" aria-describedby="basic-addon1"/>
              </div> 

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Tipo:</span>
                <input type="text" value={tipo_producto}
                 onChange={(e)=>setTipoProducto(e.target.value)}               
                className="form-control"  placeholder="Ingrese el tipo de producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Talle:</span>
                <input type="text" value={descripcion_producto}
                 onChange={(e)=>setDescripcionProducto(e.target.value)}
                className="form-control"  placeholder="Ingrese la descripcion del producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Estado:</span>
                <input type="number" value={estado_producto}
                 onChange={(e)=>setEstado(e.target.value)}
                className="form-control"  placeholder="Ingrese los aÃ±os en la empresa" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>     

        

          </div>    
            <div className="card-footer text-muted">
              {
                editar ?  
                <div>
                  <button type="submit" className='btn btn-warning m-2' onClick={editarCamiseta}>Actualizar</button> 
                  <button type="submit" className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button> 
                </div>
                : <button type="submit" className='btn btn-success' onClick={agregarCamiseta}>Registrar</button>
              }
            </div>
      </div>
      <br/><br/>

      <table className="table table-striped">
              <thead>
            <tr>
              
              <th scope="col">Categoria</th>
              <th scope="col">Nombre del producto</th>
              <th scope="col">Precio del producto</th>
              <th scope="col">Tipo del producto</th>
              <th scope="col">Talle del producto</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          
          <tbody>            
          {
            camisetaList.map((val,key)=>{
             return <tr key={val.id_producto}>          
                      <td>{val.id_categoria}</td>
                      <td>{val.nombre_producto}</td>
                      <td>{val.precio_producto}</td>
                      <td>{val.tipo_producto}</td>
                      <td>{val.descripcion_producto} </td>
                      <td>{val.estado_producto} </td>
                      <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={()=>{
                          updateCamiseta(val)
                        }} className="btn btn-info" >Editar</button>
                        <button type="button" onClick={()=>{
                          eliminarCamiseta(val)
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
    <br />   
    </div>
  )
}

export default MainCamiseta