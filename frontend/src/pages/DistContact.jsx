import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import CartService from '../services/cartService';
/*
Shows more card info on the patron
Contact info
"name":"Tom Timms",
"email":"testaccount1",
"phone":"11111111",
*/
//`${props.item.productName}`}
function DistContact(props) {
    return (
        <p>More info on ...
        <div className="card">
        <div className="card-header">
            <h1 className="card-title"><strong>Distributor Name</strong></h1>
            </div>
            <div className="card-body">
            <h2>Contact Info</h2>
            </div>
            </div>
            <Link to ="/home"><button className="btn btn-secondary btn-lg">Go back</button></Link>
            </p>
            
            );
}


export default DistContact;