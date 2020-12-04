import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import CartService from '../services/cartService';


function showDetails(){

}


function ItemDetails(props) {

    let cartService = new CartService();
    
    return (
    <div className="card">
        <div className="card-header">
        <h5 className="card-title"><strong>{`${props.item.productName}`}</strong></h5>
        </div>
        <div className="card-body">
            <div className="row">
            <div className="col-8">
                <span className="card-text tag badge badge-pill badge-primary">{`$${props.item.price}`}</span>
                <p className="card-text">{`In stock: ${props.item.quantity} items`}</p>
                <p className="card-text">{`Store ID: ${props.item.country}`}</p>
                <p className="card-text">{`Contact: ${props.item.email}`}</p>
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Location: {`${props.item.country}`}</p>
                
            </div>
            <div className="col-3">
                        <img src={`${props.item.imageURL}`} className="prod-img"/>
                    </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        
                        <Link to="/cart" className="card-link" onClick={() => cartService.addToCart(props.item)}><button className="btn btn-primary btn-lg">Order</button></Link>
                        <Link to="/distInfo" className="card-link"><button className="btn btn-secondary btn-lg">More info...</button></Link>
                        </div>
                    <div className="col-3">
                        <img src={props.item.imgURL} className="prod-img"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    );

}
//{checkType(`${props.item.productID}`)}


export default ItemDetails;