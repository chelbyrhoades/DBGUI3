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
        productNameL: '',
        nameL: '',
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
        foundIt: [{
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
        }]
        ,
                phone: "",
                imageURL: "",
                productName: "",
                name: "",           //distributor's personal name
                listingID: 0,
                email: "",
                productID: 0,
                price: 0,
                quantity: 0,
            
        
    };
    
    b(idToSearch) {
        return this.state.items.filter(item => {
          return item.listingID === idToSearch
        })
      };
      
    
    render() {
    return (
        <div>
        <div className="card">
        <div className="card-header">
            <h1 className="card-title"><strong>{this.state.productName}</strong></h1>
            </div>
            <div className="card-body">
            <h2>Contact Info</h2>
            <h3><strong>Distributor: {this.state.foundIt.name}</strong></h3>
            <p>Phone:  {this.state.foundIt.phone}</p>
            <p>Email: {this.state.foundIt.email} </p>

            </div>
            </div>
            <Link to="/cart" className="card-link" onClick={() => this.cartService.addToCart(this.state)}><button className="btn btn-primary btn-lg">Order</button></Link>
            <Link to ="/home"><button className="btn btn-secondary btn-lg">Go back</button></Link>
            </div>
            );
    }
    componentDidMount(){
        const id = this.props.match.params.listingID;
        this.repo.getListing(9996)
        .then(data => {
            this.setState({
                productNameL: data.productName,
                nameL: data.name
            })
        })
        console.log(this.productNameL);
        console.log(this.nameL);
        console.log(this.listingID);
        console.log("distributor contact mounted");
        this.repo.getListings()
        .then(productData => this.setState({items: productData})  //[0]
        );
        this.state.foundIt = this.b(this.id);
        
    }
}


export default DistContact;