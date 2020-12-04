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
                <Link to="/home">Return to homepage</Link>
            </div>
        
        )}

    componentDidMount() {
        this.repo.getOrders(window.cookie)
        .then(data => {
            this.setState({orders: data});
        })
    }

}