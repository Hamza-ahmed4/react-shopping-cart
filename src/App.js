//feature 1
//MASTER
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

class App extends Component {
  constructor(){
    super();
      this.state = {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        products: data.products,
        size : "",
        sort : ""
      }
  } 
  createOrder =(order) => {
    alert("NEED TO SAVE ORDER FOR " + order.name)
  }

  removeFromCart = (product) => {
    const cartItems= this.state.cartItems.slice();
    this.setState({
      cartItems : cartItems.filter(x=>x._id !== product._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x._id !== product._id)));
  }
  
  addToCart = (product)=> {
    let alreadyInCart = false;
    const cartItems = this.state.cartItems.slice();
    cartItems.forEach (item => {
      if(item._id === product._id){
        item.count ++
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product, count:1})
    }
    this.setState({cartItems:cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
sortProducts = (event) =>{
this.setState()
}
filterProducts= (event)=>{
  if(event.target.value === ""){
    this.setState({size : event.target.value, product: data.products});
  }
  else{
    this.setState({
      size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value)>=0
      )
    })
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
              <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}
              addToCart={this.addToCart}
              ></Products>
            </div>
            
            <div className="sidebar">
              <Cart 
              createOrder={this.createOrder}
              cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}
              ></Cart>
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
