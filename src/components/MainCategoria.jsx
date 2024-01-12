import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/MainCategoria.css'
import { useNavigate } from "react-router-dom";


const MainCategoria = () => {

  const navigate = useNavigate()

  return (
  <div ClassName= 'fondo' >
    <Header />
      <br />
      <h3 className="container d-flex justify-content-center -100 ">Nuestros productos</h3>
    
      <hr />
      <div className="container d-flex justify-content-center -100 " >
        <Card className="mr-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/disuwww5uxkqulu2aivh/air-max-plus-iii-zapatillas-TG71Wt.png" />
          <Card.Body>
            <Card.Title>ZAPATILLAS</Card.Title>
            <Card.Text>
              Ver todas nuestras zapas.
            </Card.Text>
            <Button variant="primary" onClick={(e)=>navigate("/zapatillas")}>Ir a zapatillas</Button>
          </Card.Body>
        </Card>

       
        <Card className="mr-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6abd9477-74eb-42e5-9d27-be6914c5a711/primera-equipacion-stadium-paris-saint-germain-2022-23-camiseta-de-futbol-dri-fit-LjgLxv.png" />
          <Card.Body>
            <Card.Title>CAMISETAS</Card.Title>
            <Card.Text>
              Ver todas nuestras camisetas.
            </Card.Text>
            <Button variant="primary" onClick={(e)=>navigate("/camisetas")}>Ir a camisetas</Button>
          </Card.Body>
        </Card>

        <Card className="mr-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/d/d/dd9584-412_imagen-del-pantalon-largo-de-futbol-entrenamiento-mujer-psg-nike-dri-fit-strke-2021-2022-azul_1_frontal.jpg" />
          <Card.Body>
            <Card.Title>PANTALONES</Card.Title>
            <Card.Text>
              Ver todas nuestras pantalones.
            </Card.Text>
            <Button variant="primary" onClick={(e)=>navigate("/pantalones")}>Ir a Pantalones</Button>
          </Card.Body>
        </Card>

        <Card className="mr-5" style={{ width: "18rem"  }}>
          <Card.Img variant="top" style={{ height:"230px"  }} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/577/767/products/img_20221025_1229261-46960c0cf4e410d95716667143843950-240-0.jpg" />
          <Card.Body>
            <Card.Title>BOTINES</Card.Title>
            <Card.Text>
              Ver todas nuestros botines.
            </Card.Text>
            <Button variant="primary" onClick={(e)=>navigate("/botines")}>Ir a Botines</Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
    <Footer />
      
    </div>
  );
};

export default MainCategoria;
