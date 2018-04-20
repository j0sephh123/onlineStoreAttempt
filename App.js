import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Layout/nav/nav'
import Categories from './Layout/categories/categories'
import Products from './Layout/products/products'
import Footer from './Layout/footer/footer'
import Container from './components/container/container'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
