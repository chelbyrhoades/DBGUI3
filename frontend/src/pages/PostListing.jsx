import React from 'react';
import { Item } from '../models/Item';
/*
So that the distributors can post/delete listings
*/

//(Distributorname, name, quantity, price, location, imgurl)

export class PostListing extends React.Component{
    //grabs the info via a form and pushes them into the api for the selected distributor
    
    items = [
        {
        
        }
    ]
    state = {
        Distributorname: '',
        name: '',
        quantity: 0,
        price: 0,
        location: '',
        phoneNumbers: [
            { number: '214-555-1212', type: 'fax' }
        ]
    };

    //need method that returns all the products from the selected distributor ID
    //stores them into the items array

    render() {
        return (
            <div>
            <h1>Distributor Name Goes Here</h1>
            <h2>Products </h2>

        </div>
        
        )}
}