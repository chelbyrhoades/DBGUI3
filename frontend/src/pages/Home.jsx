import React from 'react';
import './Home.css';
import {ItemDetails} from "./ItemDetails";
import {Item} from "../models/Item"




export class Home extends React.Component {

    state = {
        items: [
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
        ]
    }

    render() {

        return (

            <div className="container items-grid">
                {
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