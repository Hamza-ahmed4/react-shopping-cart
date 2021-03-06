import React, { Component} from 'react'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom'
export default class Products extends Component {
    constructor (props) {
        super(props);
        this.state = {
            product: null,
        }
    }
    openModal = (product) => {
        this.setState({product});
    }
    closeModal = () =>{
        this.setState({product: null});
    }
    render() {
        const {product} = this.state;
        return (
            <div>
                <Fade bottom cascade> 
                <ul className= "products">
                    {this.props.products.map(  product=>(
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img onClick={()=> this.openModal(product)} src={product.image} alt ={product.title}></img>
                                    <p> {product.title}</p>
                                </a>
                             </div>
                         <div className= "product-price">
                            <div> {formatCurrency(product.price)}</div>
                                      <button className ="button primary"
                                      onClick={()=>this.props.addToCart(product)}
                                      >
                                             Add to Cart
                                     </button>

                            </div>
                        </li>
                    ))}
                </ul>
                </Fade>
                { product && <Modal  isOpen= {true}>
                    <Zoom>
                        <button className="close-modal" onClick={this.closeModal}>x</button>
                        
                        <div className="product-details">
                            <img src={product.image} alt={product.title}></img>
                            <div>
                                <p>
                                    <strong>{product.title}</strong>
                                </p>
                                <p className= "product-details-description">
                                    {product.description}
                                </p>
                                <p>
                                    {product.availableSizes.map( x=>(
                                        <span>
                                            {" "} 
                                            <button className="button">{x}</button>    
                                        </span>
                                    ))}
                                </p>
                                <div>
                                    {formatCurrency(product.price)}
                                    <button className="button primary"
                                    onClick ={()=> {
                                        this.props.addToCart(product);
                                        this.closeModal();
                                    }}>
                                        Proceed
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Zoom>

               
                </Modal>

                }
            </div>
        
    )
}}
