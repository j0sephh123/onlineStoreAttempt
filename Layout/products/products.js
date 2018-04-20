import React from 'react'
import {Link} from 'react-router-dom';
import OneProduct from './one_product/oneProduct';

// const productData = {
//   productName: 'itemOne',
//   productPrice: '$24.99',
//   productText: 'Lorem ipsum dolor sit amet'
// }

const products = () => {
  return (
    <div className="row">
      <OneProduct />
      <OneProduct />
      <OneProduct />
      <OneProduct />
      <OneProduct />
      <OneProduct />
    </div>
  )
}

export default products