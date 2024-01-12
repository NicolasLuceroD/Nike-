import React from 'react';
import "../CSS/Footer.css"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter className=' text-white text-center' style={{ backgroundColor: 'rgba(52, 52, 52, 1)' }}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>NIKE <img src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-0.png" width='60' height= '40'  alt="" /> </h5>

            <p>
            Nike, Inc. Es una empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de calzado, ropa, equipo, accesorios y otros artículos deportivos. La empresa fue fundada el 20 de enero de 1964 como Blue Ribbon Sports por Bill J. Bowerman y Philip H. Knight, y se convirtió oficialmente en Nike, Inc. el 30 de mayo de 1971.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>REDES SOCIALES:</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.instagram.com/nike/?theme=dark' Target="_blank"  className='text-white'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/nike' Target="_blank" className='text-white'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://twitter.com/NikeArgentina' Target="_blank" className='text-white'>
                  Twitter
                </a>
              </li>
              
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0 0 0)' }}>
        © 2020 Copyright:
        <a className='text-white' Target="_blank" href='https://www.nike.com.ar/' >
            Nike
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer