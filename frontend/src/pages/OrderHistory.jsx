import React from 'react';
import './OrderHistory.css';
import { Link,  withRouter } from 'react-router-dom';
import { Repository } from '../api/repository';
import Order from './Order';
/*
    Idea: check current user type, compare to see if distributor - reutrn all 
*/
export class OrderHistory extends React.Component{
//pulls up any orders that the user has made

    repo = new Repository();

    state = {
        dist: false,
        data: {
            name: "",
            email: "",
            typeName: "",
            phone: "",
            country: "",
            streetAddress: ""
        },
        orders: []  //stores either all the user's previous orders or all user's orders
    }
    //distributors get to see full order sheets 
    checkIfDist(){
        console.log("checking if distributor ... ");
        if(this.state.data.typeName == "Distributor" || this.state.data.typeName == "Government Official"){
            //return all orders 
            this.dist = true;
            console.log("this user can see all orders");
            console.log(this.state.data.typeName);
            
        }else{
            console.log("this user can only see their orders");
            console.log(this.state.data.typeName);
        }
        //get orders where buyerID = userID

        if(this.state.dist == false){
            //shows their past orders

        }else{

        }
    }

//cards for each individual order  
    render() {
        return (
            <div className="container">
                <div >
            <p>Checking if this user is a distributor</p>
            {this.checkIfDist()}
            </div>
            <div className="card">
                <div className = "card-title">
                <h1>Order History for {this.state.data.name}</h1>
                </div>
                
                
                <div className = "card-body">
                    <Link to="/home">Return Home</Link>
                </div>
                </div>
            </div>
        
        )}
//{
                    
//}this.state.orders.map( x => <Order order={x}/> )
    componentDidMount() {
        const id = this.props.match.params.uid;
        console.log(id);
        this.repo.getAccountInfo(198)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        //this.repo.getOrders()
       // .then(data => {
      //      this.setState({orders: data});
      //  })
    }

}
export default withRouter(OrderHistory);