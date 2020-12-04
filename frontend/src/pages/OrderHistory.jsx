import React from 'react';
import './OrderHistory.css';
import { Link,  withRouter } from 'react-router-dom';
import { Repository } from '../api/repository';
import Order from './Order';
/*
    Idea: check current user type, compare to see if distributor - reutrn all 



    [{"transID":1,
    "datetime":"2020-08-04T00:00:00.000Z",
    "productID":1,
    "quantity":30,
    "buyerID":2,
    "addressID":2,
    "sellerID":1,
    "orderStatus":"pending"}]
*/
export class OrderHistory extends React.Component{
//pulls up any orders that the user has made

    repo = new Repository();

    state = {
        dist: false,
        data: {
            transID: 0,
            name: "",
            email: "",
            typeName: "",
            phone: "",
            country: "",
            streetAddress: ""
        },
        orderData: [
            {
                sellerID: "",
                orderStatus: "",
                quantity: 0,
                buyerID: "",
                datetime: "",
                productID: 0
            }
        ]  //stores either all the user's previous orders or all user's orders
    }
    //making the date look visually pleasing
    getOrderDate(){
        var theDate = this.state.orderData[0].datetime;
        console.log(theDate);
        var year = theDate.substring(0, 4);
        var month = theDate.substring(5,7);
        var day = theDate.substring(8,10);
        console.log(month, day, year);
        var calMonth;
        switch(month) {
            case '01':
                calMonth = "January";
                break;
            case '02':
                calMonth = "February";
                break;
            case '03':
                calMonth = "March";
                break;
            case '04':
                calMonth = "April";
                break;
            case '05':
                calMonth = "May";   
                break;
            case '06':
                calMonth = "June"; 
                break;
            case '07':
                calMonth = "July";
                break;
            case '08':
                calMonth = "August";
                console.log("August");
                break;
            case '09':
                calMonth = "September"; 
                break;
            case '10':
                calMonth = "October";
                break;
            case '11':
                calMonth = "November";
                break;
            case '12':
                calMonth = "December";  
                break;
            default:
                calMonth = "err";
                break;
              
          }
          var space = " ";
          var finalDate = calMonth + space + day + space + year;

          return finalDate;
        //customer.firstSale.toLocaleDateString()}
        
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
                <Link to="/home">Return Home</Link>
            {this.checkIfDist()}
            <h1>Order History for {this.state.data.name}</h1>
            </div>
            <div className="card">
                <div className = "card-title">
                    <h2>{`Product ID: ${this.state.orderData[0].productID}`}</h2>
                    <h3>{`Transaction ID: ${this.state.orderData[0].transID}`}</h3>
                </div>
                <div className = "card-body">
                <ul className="list-group list-group-flush">
                        <li className="list-group-item">{`Date of Order: ${this.getOrderDate()}`}</li>
                        <li className="list-group-item">{`Seller ID: ${this.state.orderData[0].sellerID}`}</li>
                        <li className="list-group-item">{`Status: ${this.state.orderData[0].orderStatus}`}</li>
                    </ul>
                
                   
                </div>
                </div>
            </div>
        
        )}
//{
    /*
    <h3>Order History</h3>
                {
                    this.state.orders.map( x => <Order order={x}/> )
                }
    */
                    
//}this.state.orders.map( x => <Order order={x}/> )
    componentDidMount() {
        const id = this.props.match.params.orderId;
        console.log(id);
        this.repo.getAccountInfo(id)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        //var subS = window.cookie.substr(0,window.cookie.indexOf(':'));
        this.repo.getOrders(id)
        .then(data => {
           this.setState({orderData: data});
        })
        console.log("got the user's orders!");
}

}
export default withRouter(OrderHistory);