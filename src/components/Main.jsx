import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import "../CSS/Main.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Main = () => {
  return (
  <div className='divTodo'>
   
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='fotoCarrusel2.png'
        alt='...'
      >
     
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='fotoCarrusel3.jpg'
        alt='...'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='Fotos'
        itemId={3}
        src='fotoCarrusel4.png'
        alt='...'
      >
       
      </MDBCarouselItem>
    </MDBCarousel>

    <br />
    <div className="container d-flex justify-content-center -100 ">
    <h3 >Productos Destacados</h3>
    </div>
    <hr />

  <div className="container d-flex justify-content-center -100 ">
  
    <Card className="mr-5" style={{ width: "18rem" }}> 
          <Card.Img variant="top" src="https://cf.shopee.com.mx/file/d430848486a9b9394842e132eb763baf" />
          <Card.Body>
            <Card.Title>Zapatillas Air 85</Card.Title>
            <Card.Text>
              Ver todas nuestros calzados.
            </Card.Text>
            <Link to="/zapatillas" className="btn btn-success mr-2" variant="success" style={{margin:0, padding:10, width: '100%'}}>VER</Link>
          </Card.Body>
    </Card>

      <Card  className="mr-5 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/297a9ad9-d331-4b6b-b435-6e96e9a675a8/jordan-essentials-pantalon-de-tejido-woven-nCHG0z.png" />
          <Card.Body>
            <Card.Title>Pantalon Jordan </Card.Title>
            <Card.Text>
              Ver todas nuestras camisetas.
            </Card.Text>
          
            <Link to="/pantalones" className="btn btn-success mr-2" variant="success" style={{margin:0, padding:10, width: '100%'}}>VER</Link>
           
          </Card.Body>
      </Card>

      <Card className="mr-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84a98bf5-ea77-488c-b193-cbdf1317386d/cuarta-equipacion-stadium-paris-saint-germain-2023-24-camiseta-de-futbol-jordan-dri-fit-HW1wg0.png" />
          <Card.Body>
            <Card.Title>Camiseta PSG</Card.Title>
            <Card.Text>
              Ver todas nuestras camisetas.
            </Card.Text>
          
            <Link to="/camisetas" className="btn btn-success mr-2" variant="success" style={{margin:0, padding:10, width: '100%'}}>VER</Link>
         
          </Card.Body>
      </Card>

    </div>
    <br />
    
  </div>  
  );
}


export default Main;