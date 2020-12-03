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
        if (this.state.cart.items.legnth === 0)
            return;
        this.setState({complete: true});
        this.state.cart.items.map(x => {
            this.repo.postOrder(x);
        })
        this.cartService.clearCart();
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
                                <td>{item.quantity}</td>
                                <td>{`${item.product.name} - `} <span className="price">{`$${item.product.price}/each`}</span> </td>
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