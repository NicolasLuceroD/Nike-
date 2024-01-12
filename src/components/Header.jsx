import React, { useState } from 'react';
import "../CSS/Header.css"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';


const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    
      <MDBNavbar expand='lg' dark bgColor='dark' >
        
        <MDBContainer  fluid>
          <MDBNavbarBrand href='/Home' >Nike</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            
            <MDBIcon icon='bars'  fas />
          </MDBNavbarToggler>
          {/* <MDBCollapse navbar show={showNav}> */}
            <MDBNavbarNav>
              <MDBNavbarItem>              
                <MDBNavbarLink href='/categoria'>
                  Productos
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>              
                <MDBNavbarLink href='/CrudCategoria'>
                  Categoria
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Somos' >¿Quienes somos?</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>              
                <MDBNavbarLink href='/Usuarios'style={{marginLeft:'1000px'}}>
                  Usuarios
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
          {/* </MDBCollapse> */}
        </MDBContainer>
        <img src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-0.png" width='65' height= '50' alt="" />
      </MDBNavbar>
      
    );
  }
export default Header