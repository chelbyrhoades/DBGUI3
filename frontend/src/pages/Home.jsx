import React from 'react';
import './Home.css';
import ItemDetails from "./ItemDetails";
import {Item} from "../models/Item"
import {Repository} from '../api/repository';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSearch from './HomeSearch.js';



export class Home extends React.Component {
    repo = new Repository;
    /*{"listingID":1,"productID":1,
    "price":15,
    "quantity":250,
    "user_userID":0,
    "user_type_typeID":1,
    "imageURL":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-www-shopdisney-com-2020-05-27-16-44-47-1590615961.png?crop=1.00xw:0.665xh;0,0.335xh&resize=1200:*",
    "productName":"Super Masks",
"userID":0,
"email":"testaccount1",
"name":"Tom Timms",
"phone":"11111111",
"password":"c581dc5bb7c8f3164e3194b2a1629e9be1322b9d58aa0",
"cookie":"0:WMKLfg43aSO9V3mLBTh9m24Ty5Au4hNt",
"sessionExpiration":"2020-12-04T20:08:11.000Z",
"country":"USA",
"type_typeID":2,
"locked":0}
    */
    state = {
        items: [
            {
                phone: "",
                imageURL: "",
                productName: "",
                name: "",           //distributor's personal name
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
            
            <div className="col-8">
            <div className="pb-3">
                <Router>
                    <Route path="/home" exact render={ () =>
                        <Link to="/search">
                            <button className="btn btn-secondary btn-lg">Filter Products...</button>
                            </Link> } />
                    <Route path="/search" render={ props => 
                        <HomeSearch onSearch={ params => this.onSearch(params) } { ...props } /> } />
                </Router>
            </div>    
                
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

