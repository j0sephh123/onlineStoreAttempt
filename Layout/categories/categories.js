import React from 'react'
import {Link} from 'react-router-dom';
import OneCategory from './one_category/oneCategory';

const categories = () => {
  return (
    <div className="col-lg-3">
  
    <h1 className="my-4 mt-5">Shop Name</h1>
    <div className="list-group">
      <OneCategory />
      <OneCategory />
      <OneCategory />
      <OneCategory />
      <OneCategory />
      <OneCategory />
    </div>

  </div>
  )
}

export default categories