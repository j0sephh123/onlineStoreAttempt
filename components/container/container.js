import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../Layout/nav/nav'
import Categories from '../../Layout/categories/categories'
import Products from '../../Layout/products/products'
import Footer from '../../Layout/footer/footer'


const Container = () => {

    return (
  
      <div className="container mt-5">
        <div className="row">
          <Categories />
          <div className="col-lg-9 mt-5">
          <Products />
          </div>
        </div>
      </div>
    );
  
}

export default Container;