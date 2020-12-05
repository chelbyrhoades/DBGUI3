import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {Repository} from '../api/repository';
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import CartService from '../services/cartService';
/*
Shows more card info on the distributor
Contact info
"name":"Tom Timms",
"email":"testaccount1",
"phone":"11111111",
*/
//`${props.item.productName}`}
class DistContact extends React.Component{
    repo = new Repository();
    cartService = new CartService();
    state = {
        items: [{
            
                listingID: 0,//address /distribut
                phone: "",
                imageURL: "",
                productName: "",
                name: "",           //distributor's personal name
                listingID: 0,
                email: "",
                productID: 0,
                price: 0,
                quantity: 0
            
        }],
        
                distPhone: "",
                productName: "Set of Masks",
                name: "PPeazy Distributor",           //distributor's personal name
                listingID: 0,
                email: "",
                productID: 0,
                price: 15
            
        
    };
    setPhone(){
        this.state.disPhone = Math.floor(Math.random() * 1000000000);

    }
    //<span className="card-text badge badge-pill badge-primary"><h3><strong>{this.state.items.price}.00</strong></h3></span>
    render() {
    return (
        <div className = "container">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <div className = "row">
                            <div className = "col">
                        <h1><strong>{this.state.productName}</strong></h1>
                            </div>
                            <span className="card-text badge badge-pill badge-primary"><h3><strong>{this.state.items.price}.00</strong></h3></span>
                        </div>                         
                    </div>
                </div>
            <div className="card-body">
                <div className = "row">
            <div className="col-3">
                <img src={this.state.items.imageURL} className="prod-img"/>
            </div>
            <div className = "col">
            <h4>Contact Info</h4>
            <p><strong>Distributor: {this.state.name}</strong></p>
            <p>Email: {this.state.items.email} </p>
            <p>Phone Number:  {this.state.disPhone}</p>
            </div>
            </div>
            
            </div>
            </div>
            <div>
            <Link to="/cart" className="card-link" onClick={() => this.cartService.addToCart(this.state)}><button className="btn btn-primary btn-lg">Order</button></Link>
            <Link to ="/home"><button className="btn btn-secondary btn-lg">Go back</button></Link>
            </div>
            </div>
            );
    }
    componentDidMount(){
        const id = this.props.match.params.listingID;
        
        /*this.repo.getListing(9996)
        .then(data => {
            this.setState({
                productNameL: data.productName,
                nameL: data.name
            })
        })*/
        console.log("distributor contact mounted");
        this.repo.getListingsById(2)
        .then(productData => this.setState({items: productData}) ) //, () => {console.log(this.state.items)})//
        this.setPhone();
        console.log(this.state.disPhone);
        
    }
}


export default DistContact;