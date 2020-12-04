import React from 'react';
import { Link } from "react-router-dom";

function Order(props) {

    return (
        <div className="card">
            <div className="card-header">
                {props.order.datetime}
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col-8">
                    <h5 className="card-title">{props.order.name}</h5>
                    <span className="card-text tag badge badge-pill badge-primary">{`$${props.order.price}`}</span>
                    <p className="card-text">{`In stock: ${props.order.quantity}`}</p>
                    <p className="card-text">{`Location: ${props.order.location}`}</p>
                </div>
                <div className="col-3">
                    <img src={props.order.imgurl} className="prod-img"/>
                </div>
                </div>
            </div>
        </div>
        
    );

}

export default Order;