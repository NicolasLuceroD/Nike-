import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import "../CSS/Main.css"
import { Link, useNavigate } from 'react-router-dom';


const MainSomos = () => {

  const navigate = useNavigate()

  return (
  <div className='divTodo'>
    <Header/>
    <br />
    
      <div className= "container d-flex justify-content-center" >   
      <Card className="mr-5 text-center " style={{ width: "18rem" }}>
          <Card.Img variant="top" src="fotoAgustin.png" style={{height:"18rem"}}/>
          <Card.Body>
            <Card.Title>Agustin Argañaraz</Card.Title>
            <Card.Text>
            Hola soy Agustin Argañaraz, estudiante de Programacion en la facultad UTN frt. <br/><br/>San Miguel de Tucuman
            </Card.Text>
            <Link to="https://www.instagram.com/agustin.arganaraz/?theme=dark" className="btn btn-primary" target='blank'>REDES</Link>
          </Card.Body>
        </Card>

        <Card className="mr-5 text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="fotoNico.JPG" style={{height:"18rem"}}/>
          <Card.Body>
            <Card.Title>Nicolas Lucero</Card.Title>
            <Card.Text>
              Hola soy Nicolas Lucero, estudiante de Programacion en la facultad UTN frt. <br/><br/>San Miguel de Tucuman
            </Card.Text>
            <Link to="https://www.instagram.com/nicolucerodelllanos/?theme=dark" className="btn btn-primary" target='blank'>REDES</Link>

          </Card.Body>
        </Card>

        <Card className="mr-5 text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images.jpg" style={{height:"18rem"}}/>
          <Card.Body>
            <Card.Title>Luciano Azalot</Card.Title>
            <Card.Text>
              Hola soy Luciano Azalot, estudiante de Programacion en la facultad UTN frt. <br/><br/>San Miguel de Tucuman
            </Card.Text>
            <Link to="https://www.instagram.com/luciano.azalot/?theme=dark" className="btn btn-primary"  target='blank'>REDES</Link>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className = 'text-center'>
        <Button onClick={(e)=>navigate("/Home")} >VOLVER</Button>
      </div>
      <br/>
    <Footer/>
  </div>
  )
}

export default MainSomos