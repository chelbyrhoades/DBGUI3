import React from 'react';
import { Item } from '../models/Item';
/*
So that the distributors can post/delete listings
*/

//(Distributorname, name, quantity, price, location, imgurl)

export class PostListing extends React.Component{
    //grabs the info via a form and pushes them into the api for the selected distributor
    
    items = [
        {
        
        }
    ]   //Distributorname, name, quantity, price, location
    state = {
        item: {
          Distributorname: '',
          name: '',
          quantity: '',
          imageUrl: '',
          price: '',
          location: '',
        }
      };

      componentDidMount = () => {   //NEED TO EDIT AND ADD A CALL METHOD TO EDIT ITEMS WITHIN SYSTEM - move to repository API
        axios.get(`http://localhost:3333/itemById/${this.props.match.params.id}`)
          .then(res => {
            this.setState({item: res.data});
          })
          .catch(err => console.log(err))
      }
      handleChange = e => {
        e.persist();
      
        this.setState(prevState => ({
          item: { ...prevState.item,  [e.target.name]: e.target.value }
        }))
      }

    //need method that returns all the products from the selected distributor ID
    //stores them into the items array

    render() {
        return (
            <div>
            <h1>Distributor Name Goes Here</h1>
            <h2>Products </h2>
            <form onSubmit={this.handleSubmit}>

            <input type="text" name="name"
                value={this.state.item.name}
                placeholder="Name"
                onChange={this.handleChange}
            />
            </form>


        </div>
        
        )}
}