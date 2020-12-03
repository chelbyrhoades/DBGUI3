import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import CartService from '../services/cartService';
import Button from 'react-bootstrap/Button';

function checkType(pid) {
    if (pid < 5) {
        var itemType = "Disposable Face Masks";
      }else if(pid <10 && pid > 5){
          var itemType = "Disposable Gloves";
      }else{
          var itemType = "Face Shields";
      }
      //props.item.productID = itemType;
      return itemType;
      
}
function checkDist(di){
    var dists = ['PPEazy', 'Carols', 'DistriPPE']
    var dist = dists[Math.floor(Math.random() * dists.length)];
    if(di == undefined || di == "undefined"){
        return dist;
    }
    return di;
}
function checkLocation(loc){
    var items = ['Denton', 'Fort Worth', 'Dallas', "Amarillo"];

    var item = items[Math.floor(Math.random() * items.length)];
    if(loc == undefined || loc == "undefined"){
        return item;
    }
    return loc;
}
function checkURL(leType){
    if (leType < 5) {
        var itemType = "Masks";
        var leUrl = "https://cdn11.bigcommerce.com/s-ixwpuc55v/images/stencil/1280x1280/products/10410/16660/FaceMask_2__62168.1591128381.jpg?c=1";

      }else if(leType <10 && leType > 5){
          var itemType = "Gloves";
          var leUrl= "https://images-na.ssl-images-amazon.com/images/I/41SQkv0Q0IL._AC_SY400_.jpg";
      }else{
          var itemType = "Face Shields";
          var leUrl = "https://bjs.scene7.com/is/image/bjs/250902?$bjs-Zoom$";
      }
      return leUrl;
      
}


function ItemDetails(props) {

    let cartService = new CartService();
    
    return (
    <div className="card">
        <div className="card-header">
        <p className="card-text">{checkDist(`${props.item.Distributorname}`)}</p>
        </div>
        <div className="card-body">
            <div className="row">
            <div className="col-8">
                <h5 className="card-title">{checkType(`${props.item.productID}`)}</h5>  
                <span className="card-text tag badge badge-pill badge-primary">{`$${props.item.price}`}</span>
                <p className="card-text">{`In stock: ${props.item.quantity}`}</p>
                <p className="card-text">{`Store ID: ${props.item.listingID}`}</p>
                <p className="card-text">{`Contact: ${props.item.email}`}</p>
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Location: {checkLocation(`${props.item.location}`)}</p>
                
            </div>
            <div className="col-3">
                        <img src={checkURL(`${props.item.productID}`)} className="prod-img"/>
                    </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        
                        <Link to="/cart" className="card-link" onClick={() => cartService.addToCart(props.item)}>Order</Link>
                    </div>
                    <div className="col-3">
                        <img src={props.item.imgurl} className="prod-img"/>
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