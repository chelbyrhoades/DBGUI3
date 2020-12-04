import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import {CartService} from '../services/cartService';

function ItemDetails(props) {
    
    //plural in the table
        let cartService = new CartService();
        return (
        <div>
            {props.items.map(item => 
            <div key={item.listingID}>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"><strong>{item.productName}</strong></h5>
                    </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <span className="card-text badge badge-pill badge-primary"><h3><strong>{item.price}.00</strong></h3></span>
                                    <p className="card-text"><strong>Type:</strong> {item.PpeType}</p>
                                    <p className="card-text"><strong>Stock:</strong> {item.quantity}</p>
                                     <p className="card-text"><strong>Location: </strong>{item.country}</p>
                                     <p className="card-text"><strong>Contact Information: </strong>{item.email}</p>
                                     
                                     <br/>
                                </div>
                                <div className="col-3">
                                    <img src={item.imageURL} className="prod-img"/>
                                </div>
                                <Link to="/cart"
                                    className="btn btn-primary btn-lg"
                                    onClick={ () =>  cartService.addToCart(item)}>
                                        Add to Cart
                                </Link>
                                <Link to={`/distInfo/${item.listingID}`} className="btn btn-secondary btn-lg">More info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>);
    /*
    return (
    <div className="card"
    {item.name}>
        <div className="card-header">
        <h5 className="card-title"><strong>{`${props.item.productName}`}</strong></h5>
        </div>
        <div className="card-body">
            <div className="row">
            <div className="col-8">
                <span className="card-text badge badge-pill badge-primary"><h3><strong>{`$${props.item.price}`}.00</strong></h3></span>
                <p className="card-text">{`In stock: ${props.item.quantity} items`}</p>
                <p className="card-text">Location: {`${props.item.country}`}</p>
                <p className="card-text">ListingID: {`${props.item.listingID}`}</p>
                
            </div>
            <div className="col-3">
                        <img src={`${props.item.imageURL}`} className="prod-img"/>
                    </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        
                        <Link to="/cart" className="card-link" onClick={() => cartService.addToCart(props.item)}><button className="btn btn-primary btn-lg">Order</button></Link>
                        <Link to={`/distInfo/${props.item.listingID}`} className="card-link"><button className="btn btn-secondary btn-lg">More info...</button></Link>
                        </div>
                    <div className="col-3">
                        <img src={props.item.imgURL} className="prod-img"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    );*/


//{checkType(`${props.item.productID}`)}
/*
<div className="container items-grid">
                {//this.state.data.address}
                    this.state.items.map((x, i) => 
                        (<div key={i}>
                            <ItemDetails item={x}/>
                        </div>)
                    )
                }
            </div>
*/
}
export default ItemDetails;