import React from 'react';
import './OrderHistory.css';
import { Link } from 'react-router-dom';
import { Repository } from '../api/repository';
import Order from './Order';

export class OrderHistory extends React.Component{
//pulls up any orders that the user has made

    repo = new Repository();

    state = {
        orders: [
            //dummy data until we pull actual data from api
            //transactionId, name, country, productId, quantity, userId, distributorId
            {id: 1,
            name: "Masks",
            country: "US",
            productId: "2",
            quantity: 500,
            userId: 1,
            distributorId: 1,
            
            },
            {id: 2,
                name: "Gloves",
                country: "UK",
                productId: "3",
                quantity: 250,
                userId: 1,
                distributorId: 1,
            
            }
        ]
    }
    
//cards for each individual order  
    render() {
        return (
            <div className="container">
                <h3>Order History</h3>
                {
                    this.state.orders.map( x => <Order order={x}/> )
                }
            </div>
        
        )}

    componentDidMount() {
        this.repo.getOrders()
        .then(data => {
            this.setState({orders: data});
        })
    }

}