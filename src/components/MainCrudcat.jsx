import React from 'react'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'


const MainCrudcat = () => {

  const [id_categoria,setIdCategoria] = useState ()
  const [descripcion_categoria,setDescripcionCategoria] = useState ("")
  const [estado_categoria,setEstadoCategoria] = useState (1)
  const [editar,setEditar] = useState(false)
  const [categoriaList,setCategoriaList] = useState ([])



  const verCategoria = () =>{
    axios.get ("http://localhost:3001/categoria").then((response)=>{
      setCategoriaList(response.data)
    })
  }


  const agregarCategoria = () =>{
    axios.post("http://localhost:3001/categoria/post",{
      id_categoria:id_categoria,
      descripcion_categoria:descripcion_categoria,
      estado_categoria:estado_categoria
    }).then(()=>{
      verCategoria()
      limpiarCampos()
      Swal.fire({
        title: " <strong>Registro exsitoso!</strong>",
        html: "<i>El producto <strong> "+descripcion_categoria+" </strong> fue registrado con exito</i>",
        icon: 'success',
        timer:3000
      })
    })
  } 

  const editarCategoria = (e) =>{
    e.preventDefault()

      axios.put(`http://localhost:3001/categoria/put/${id_categoria}`,{
        id_categoria:id_categoria,
        descripcion_categoria:descripcion_categoria,
        estado_categoria:estado_categoria
      
    }).then(()=>{
      limpiarCampos()
      verCategoria()
      Swal.fire({
        title: " <strong>Actualizacion exsitosa!</strong>",
        html: "<i>El producto <strong> "+descripcion_categoria+" </strong> fue actualizado con exito</i>",
        icon: 'success',
        timer:3000
      })
    });

  }

  

  const updateCategoria = (val) =>{ 
    setEditar(true)   
    setIdCategoria(val.id_categoria)
    setDescripcionCategoria (val.descripcion_categoria)
    setEstadoCategoria(val.estado_categoria)  
  }

  const eliminarCategoria = (val) =>{
    Swal.fire({
      title: 'Confirmar eliminacion?',
      html: "<i>Realmente desea eliminar el registro <strong>"+val.descripcion_categoria+"</strong> </strong></i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete (`http://localhost:3001/categoria/delete/${val.id_categoria}`,{
        }).then(()=>{
          limpiarCampos()
          verCategoria() 
          Swal.fire(
            'Eliminado!',
            val.descripcion_categoria+'fue eliminado.',
            'success',
          )   
        });      
      }
    });   
  }
  


  const limpiarCampos = () => {
    setEditar(false)   
    setIdCategoria('')
    setDescripcionCategoria ('')
    setEstadoCategoria(1)
}


useEffect (()=>{

  verCategoria();
},[]);


  return (
   
    <form action="" onSubmit={editarCategoria}>
     <br/>
        <div className="card text-center">
          <div className="card-header">
              GESTION DE CATEGORIAS
          </div>
            <div className="card-body"> 

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">ID Categoria:</span>
                <input type="text" value={id_categoria}
                 onChange={(e)=>setIdCategoria(e.target.value)}               
                className="form-control"  placeholder="Ingrese el tipo de producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                <input type="text" value={descripcion_categoria}
                 onChange={(e)=>setDescripcionCategoria(e.target.value)}
                className="form-control"  placeholder="Ingrese la descripcion del producto" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Estado:</span>
                <input type="number" value={estado_categoria}
                 onChange={(e)=>setEstadoCategoria(e.target.value)}
                className="form-control"  placeholder="Ingrese los aÃ±os en la empresa" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>     

        

          </div>    
            <div className="card-footer text-muted">
              {
                editar ?  
                <div>
                  <button type="submit" className='btn btn-warning m-2' onClick={editarCategoria}>Actualizar</button> 
                  <button type="submit" className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button> 
                </div>
                : <button type="submit" className='btn btn-success' onClick={agregarCategoria}>Registrar</button>
              }
            </div>
      </div>
      <br/><br/>

      <table className="table table-striped">
              <thead>
            <tr>
              
              <th scope="col">Categoria</th>
              <th scope="col">Nombre Categoria</th>
              <th scope="col">Estado Categoria</th>
            </tr>
          </thead>
          
          <tbody>            
          {
            categoriaList.map((val,key)=>{
             return <tr key={val.id_categoria}>          
                      <td>{val.id_categoria}</td>
                      <td>{val.descripcion_categoria}</td>
                      <td>{val.estado_categoria}</td>     
                      <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={()=>{
                          updateCategoria(val)
                        }} className="btn btn-info" >Editar</button>
                        <button type="button" onClick={()=>{
                          eliminarCategoria(val)
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

export default MainCrudcat