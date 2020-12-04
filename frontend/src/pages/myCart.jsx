import React from "react";
import CartService from "../services/cartService";
import Cart from "../models/cart";
import CarttItem from "../models/cartItem"
import "./myCart.css";
import { Link } from "react-router-dom";
import { Repository } from "../api/repository";

export class MyCart extends React.Component {

    cartService = new CartService();
    repo = new Repository();

    state = {
        cart: this.cartService.getCart(),
        complete: false
    }

    handleOrder = () => {
        if (this.state.cart.items.length === 0)
            return;
        this.setState({complete: true});
        this.state.cart.items.map(x => {
            let json = {
                quantity: x.quantity,
                cookie: window.cookie
            }
            this.repo.postOrder(x.product.listingID, json);
        })
        this.cartService.clearCart();
    }

    increaseQuantity = (prod) => {
        this.cartService.addToCart(prod);
        this.setState({cart: this.cartService.getCart()})
    }

    decreaseQuantity = (prod) => {
        this.cartService.removeFromCart(prod);
        this.setState({cart: this.cartService.getCart()});
    }

    clear = () => {
        this.cartService.clearCart();
        this.setState({cart: this.cartService.getCart()})
    }

    render() {
        return (
            <div className="container"> 
            {!this.state.complete &&
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Qty</th>
                        <th scope="col">Product</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        this.state.cart.items.map((item, i) =>
                            <tr key={i}>
                                <td>
                                    <div className="row">
                                        <div className="col-1">
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.decreaseQuantity(item)}>-</button>
                                        </div>
                                        <div className="col-1">
                                            {item.quantity}
                                        </div>
                                        <div className="col-1 plus-btn">
                                            <button type="button" className="btn btn-success btn-sm" onClick={() => this.increaseQuantity(item)}>+</button>
                                        </div>
                                    </div>
                                    
                                </td>
                                <td>{`${item.product.productName} - `} <span className="price">{`$${item.product.price}/each`}</span> </td>
                                <td>{`$${item.totalPrice}`}</td>
                            </tr>
                        )
                    }
                    <tr id="total">
                        <td></td>
                        <td></td>
                        <th>{`$${this.state.cart.total}`}</th>
                    </tr>
                </tbody>
                </table>}
                {!this.state.complete && <div className="row">
                    <div className="col">
                        <Link to="/home">Return to homepage</Link>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-danger" onClick={this.clear}>Clear cart</button>
                    </div>    
                    
                    <div className="col">
                        <button type="button" className="btn btn-success float-right" onClick={this.handleOrder}>Complete Order</button>
                    </div>
                </div>}
                {this.state.complete &&
                    <div className="alert alert-success">The distributor(s) have been notified of your request. <Link to="/home">Return to homepage</Link>
                    </div>
                }
               
            </div>
        );
    }

}