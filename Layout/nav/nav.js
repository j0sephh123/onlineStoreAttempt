import React from 'react'
import {Link} from 'react-router-dom';

const nav =  () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link to='/' className="navbar-brand">Start Bootstrap </Link>
      <button className="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarResponsive" 
      aria-controls="navbarResponsive" aria-expanded="false" 
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <Link to='/' className="nav-link"  >Products
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/' className="nav-link"  ><i class="fas fa-shopping-cart"></i><span>123</span></Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}
export default nav