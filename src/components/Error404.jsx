import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className ="container d-flex justify-content-center -100 ">

        <div>
        <br /><br /><br />
        <img src="error404Nike.jpg" alt="Error404Nike" />
        <br /><br /><br />
        <div className='container'>
        <Link to="/Home" className='btn btn-info mx-auto d-block'>VOLVER</Link>
        </div>
        </div>
        
    </div>
  )
}

export default Error404