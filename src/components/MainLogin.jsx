import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const MainLogin = () => {
  let navigate = useNavigate()
  
  const [usuario,setUsuario] = useState ("")
  const [contraseña,setContraseña] = useState ("")
  

  const HandleUsuario = (e) =>{
    setUsuario(e.target.value)
  }

  const HandleContraseña = (e) =>{
    setContraseña(e.target.value)
  }

  

  const handleSubmit = (e)=>{
    if (usuario === 'admin' && contraseña === '123') {
      Swal.fire({
        title: " <strong>Bienvenido a Nike</strong>",
        //html: "<i>  <strong>  </strong> fue registrado con exito</i>",
        icon: 'success',
        timer:3000
      })
      navigate("/Home")
    }else{
      Swal.fire({
        title: " <strong>Usuario Incorrecto!</strong>",
      //  html: "<i>El producto fue registrado con exito</i>",
        icon: 'warning',
        timer:3000
      })
      //e.target.reset()
      return
    }
  }

  
  return (
    <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='logoNike.png' alt="login form" className='rounded-start w-100' />
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <span className="h1 fw-bold mb-0">BIENVENIDO</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Iniciar sesión en su cuenta</h5>

              <MDBInput wrapperClass='mb-4' label='Usuario' id='formControlLg' type='email' size="lg" onChange={HandleUsuario}/>
              <MDBInput wrapperClass='mb-4' label='Cotraseña' id='formControlLg' type='password' size="lg" onChange={HandleContraseña}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit' onClick={handleSubmit}>Login</MDBBtn>
            

            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Condiciones de uso.</a>
              <a href="#!" className="small text-muted">Política de privacidad</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>
  )
}

export default MainLogin


