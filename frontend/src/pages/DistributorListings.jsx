import React from 'react';
import { Link } from 'react-router-dom';
import './DistributorListings.css';
/*
Shows the product listings when a person clicks a distributor or product's name
Shows contact info
*/

export class DistributorListing extends React.Component{

    state = { //Distributorname, name, quantity, price, location, imgurl){

        Distributorname:"PPeasy Distributor",
        name: "Box of masks",
        quantity: 500,
        price: 9.99,
        location: "Dallas,TX",
        imgurl: "https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
      }
  
    render() {
        return(
        <div className = "Container" >
            
            <p> Here is where a page about the distributor would be</p>
            <div>
            <h1> {this.state.Distributorname}</h1>
            <p><img className = "Image" src = {this.imgurl}/></p>
            <p>{this.name}</p>
            <p>{this.quantity}</p>
            <p>{this.location}</p>
            <p>${this.price}</p>
            <br/>
          </div>
            <Link className="btn btn-link home-button" to="/home">
            Return home
          </Link>

        </div>
    )}

}