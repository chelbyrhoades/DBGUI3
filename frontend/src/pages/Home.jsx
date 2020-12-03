import React from 'react';
import './Home.css';
import ItemDetails from "./ItemDetails";
import {Item} from "../models/Item"
import {Repository} from '../api/repository';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSearch from './HomeSearch.js';
import Button from 'react-bootstrap/Button';



export class Home extends React.Component {
    repo = new Repository;
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
        this.repo.getListings()
        .then(productData => this.setState({items: productData})  //[0]
        );
        console.log("products are mounted");
    }

    onSearch(params) {
        this.repo.getListings(params)
        .then(productData => this.setState({items: productData}));
    }
    render() {

        return (
            <div className="container pt-3">
                <h1>PPE Home</h1>
            <div className="clearfix"></div>
            <div className="pb-3">
                <Router>
                    <Route path="/home" exact render={ () =>
                        <Link to="/search">
                            <Button variant="secondary" size="lg">Filter Products...</Button>
                            </Link> } />
                    <Route path="/search" render={ props => 
                        <HomeSearch onSearch={ params => this.onSearch(params) } { ...props } /> } />
                </Router>
            </div>    
            <div className="col-8">
                
            </div>
            <div className="container items-grid">
                {//this.state.data.address}
                    this.state.items.map((x, i) => 
                        (<div key={i}>
                            <ItemDetails item={x}/>
                        </div>)
                    )
                }
            </div>
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