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
                productID: 0,
                ppeType: "Gloves",
                location: "France"
            }
        ],  //stores either all the user's previous orders or all user's orders
        items: [],
        dummyData: [{
                transID: 1,
                sellerID: "4",
                orderStatus: "pending",
                quantity: 300,
                buyerID: "12",
                datetime: "2020-12-12",
                productID: 1,
                ppeType: "Mask",
                location: "US"
          },
          {
            transID: 2,
            sellerID: "3",
                orderStatus: "pending",
                quantity: 0,
                buyerID: "",
                datetime: "2020-12-12",
                productID: 1,
                ppeType: "Face Shield",
                location: "Canada"
          },
          {
            transID: 3,
            sellerID: "1",
                orderStatus: "shipped",
                quantity: 400,
                buyerID: "",
                datetime: "2020-12-12",
                productID: 2,
                ppeType: "Mask",
                location: "US"
          },
          {
            transID: 4,
            sellerID: "3",
                orderStatus: "delivered",
                quantity: 400,
                buyerID: "",
                datetime: "2020-12-12",
                productID: 3,
                ppeType: "Thermometer",
                location: "UK"
          },
          {
            transID: 5,
            sellerID: "2",
                orderStatus: "pending",
                quantity: 300,
                buyerID: "",
                datetime: "2020-12-12",
                productID: 1,
                ppeType: "Mask",
                location: "US"
          }]
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
    render() {
        return(
            <div>
                <div className = "container">
                <h1>My Orders</h1>
                <Link to="/home">Return</Link>
                {this.state.dummyData.map(d => 
                    <div key={d.transID}>
                        <div className = "card">
                            <h2><strong>{d.ppeType} </strong> </h2>
                        <p><strong>Transaction Number: {d.transID}</strong></p>

                        <p><strong>Status: </strong>{d.orderStatus}</p>
                        <p><strong>Date: </strong>{d.datetime}</p>
                        <p><strong>User Number: </strong>{d.buyerID}</p>
                        <p><strong>User Location: </strong> {d.location}</p>

                        </div>
                        </div>
                    )}
                </div>

            <Link to="/home">Return Home</Link>
            </div>
        )
        
    }
    
    allOrders(){
        this.repo.getAllOrders()
        .then(productData => this.setState({items: productData})  //[0]
        );
    }

    userDummyView(){
        return(
            <div>
                <div className="card>">
                <h1>Customer Orders</h1>
                
                </div>
            </div>
            
        )
    }

    userView(){
        if(this.dist == false){
        return(
            <div>
            <h1>Order History for {this.state.data.name}</h1>
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
        )}else{
            return(
                <div>
                    <div className="card>">
                    <h1>Customer Orders</h1>
                    {this.allOrders()}
                    {this.items.map(item => 
                        <div key={item.transID}>

                        </div>
                        )}
                    </div>
                </div>
                
            )
        }
}
//cards for each individual order  
    
        

    /*
div>
            <div className="container">
                
                
                <div >
            </div>


    <h3>Order History</h3>
                {
                    this.state.orders.map( x => <Order order={x}/> )
                }
    */
                    
//}this.state.orders.map( x => <Order order={x}/> )
    componentDidMount() {
        /*console.log(id);
        this.repo.getAccountInfo(id)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        this.checkIfDist()
        if(this.dist == false){
            //show user function
            // this.repo.getOrders(id)
        //.then(data => {
        //   this.setState({orderData: data});
        //})
        //console.log("got the user's orders!");
        }else {

        }*/
        this.repo.getOrders(window.cookie)
        .then(orderData => {
            this.setState({orders: orderData});
        })

        //var subS = window.cookie.substr(0,window.cookie.indexOf(':'));
       
}

}
export default withRouter(OrderHistory);