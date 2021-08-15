//feature 1
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Products from './components/Products';
import data from "./data.json";

class App extends Component {
  constructor(){
    super();
      this.state = {
        products: data.products,
        size : "",
        sort : ""
      }
  }
  render(){

    return (
      <div className= "grid-container">
        <header>
          <a href="/"> REACT SHOPPING CART</a>
        </header>
        <main>

          <div className="content">

            <div className= "main">
              <Products products={this.state.products}></Products>
            </div>
            
            <div className="sidebar">
              Cart Item
            </div>
         
          </div>

        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
    );

  }
 
}

export default App;
