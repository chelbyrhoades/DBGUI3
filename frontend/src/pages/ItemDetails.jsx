import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";



function ItemDetails(props) {

    return (
    <div className="card">
        <div className="card-header">
            {props.item.distributorName}
        </div>
        <div className="card-body">
            <div className="row">
            <div className="col-8">
                <h5 className="card-title">{props.item.name}</h5>
                <span className="card-text tag badge badge-pill badge-primary">{`$${props.item.price}`}</span>
                <p className="card-text">{`In stock: ${props.item.quantity}`}</p>
                <p className="card-text">{`Location: ${props.item.location}`}</p>
                <Link to="/orders" className="card-link">Order</Link>
            </div>
            <div className="col-3">
                <img src={props.item.imgurl} className="prod-img"/>
            </div>
            </div>
        </div>
    </div>
    
);

}

export default ItemDetails;