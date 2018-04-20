import React from 'react'
import {Link} from 'react-router-dom';

const product = () => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to='/' ><img className="card-img-top" src="http://placehold.it/700x400" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <a>Item One</a>
          </h4>
          <h5>$24.99</h5>
          <button className='btn'><i className="fas fa-plus"></i></button>
          <button className='btn'><i className="fas fa-minus"></i></button>
          <p className="card-text">Category: </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>
  )
}

export default product