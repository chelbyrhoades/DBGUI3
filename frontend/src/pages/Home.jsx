import React from 'react';
import './Home.css';
import ItemDetails from "./ItemDetails";
import {Item} from "../models/Item"
import {repository} from '../api/repository';



export class Home extends React.Component {
    repo = new repository;
    state = {
        
        //{"listingID":1,"email":"testaccount1","productID":1,"price":15,"quantity":250}

        /*listingID: 0,
        email: "",
        productID: 0,
        price: 0,
        quantity: 0*/
        items: [
            {
                listingID: 0,
                email: "",
                productID: 0,
                price: 0,
                quantity: 0
            }
        ]
            
        
    }
    componentDidMount() {
        this.repo.getProducts()
        .then(productData => this.setState({items: productData})  //[0]
        );
        console.log("products are mounted");
    }

    onSearch(params) {
        this.repo.getProducts(params)
        .then(products => this.setState({products}));
    }
    render() {

        return (

            <div className="container items-grid">
                {//this.state.data.address}
                    this.state.items.map((x, i) => 
                        (<div key={i}>
                            <ItemDetails item={x}/>
                        </div>)
                    )
                }
            </div>

        
        );
    }






}


/*
new Item(
                "PPeasy Distributor","Box of masks",500,9.99,"Dallas,TX","https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            ),
            new Item(
                "PPeasy Distributor","Box of masks",500,9.99,"Dallas,TX","https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            ),
            new Item(
                "PPeasy Distributor","Box of masks",500,9.99,"Dallas,TX","https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            ),
            new Item(
                "PPeasy Distributor","Box of masks",500,9.99,"Dallas,TX","https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            ),
            new Item(
                "PPeasy Distributor","Box of masks",500,9.99,"Dallas,TX","https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            )
*/