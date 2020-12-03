import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import CartService from '../services/cartService';
import Button from 'react-bootstrap/Button';

function checkType(pid) {
    if (pid == 0) {
        var itemType = "Box of Masks";
      }else if(pid == 1){
          var itemType = "Box of Gloves";
      }else{
          var itemType = "Unknown";
      }
      return itemType;
}


function ItemDetails(props) {
    
    //product id for product name - needs to update based on what productID returns

    let cartService = new CartService();
    
    return (
    <div className="card">
        <div className="card-header">
            <p>Distributor Name</p>
        </div>
        <div className="card-body">
            <div className="row">
            <div className="col-8">
                <h5 className="card-title">{checkType(`${props.item.productID}`)}</h5>  
                <span className="card-text tag badge badge-pill badge-primary">{`$${props.item.price}`}</span>
                <p className="card-text">{`In stock: ${props.item.quantity}`}</p>
                <p className="card-text">{`ListingID: ${props.item.listingID}`}</p>
                <p className="card-text">{`Email: ${props.item.email}`}</p>
                <Button onClick={ () => this.cartService.addToCart(`${props.item.productID}`) }> Add to cart</Button>
                <Link to="/orders" className="card-link">Order</Link>
            </div>
            <div className="col-3">
                <p>IMAGE GOES HERE </p>
            </div>
            </div>
        </div>
    </div>
    
);

}

export default ItemDetails;