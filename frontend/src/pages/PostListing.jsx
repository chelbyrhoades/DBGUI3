import React from 'react';
import { repository } from '../api/repository';
import { Item } from '../models/Item';
import { PPEtypes } from '../models/PPEtypes';
import { Link} from 'react-router-dom';
/*
So that the distributors can post/delete listings
*/

//(Distributorname, name, quantity, price, location, imgurl)

export class PostListing extends React.Component{
  repository = new repository;
    //grabs the info via a form and pushes them into the api for the selected distributor
    types = [
      new PPEtypes(1, "Masks"),
      new PPEtypes(2, "Gloves"),
      new PPEtypes(3, "Face Shields")
  ];
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
    
      //function that calls on axios to push a new listing
      onSave(product){
        this.repository.postNewListing(this.state)
                .then(() => {
                    alert('Listing added!');
                    this.setState({ redirect: '/home' });
                
                })
                .catch(err => alert(err));
                
        }
      goHome(){

      }



      componentDidMount = () => {   //NEED TO EDIT AND ADD A CALL METHOD TO EDIT ITEMS WITHIN SYSTEM - move to repository API
        //put axios call here
      }

    //need method that returns all the products from the selected distributor ID
    //stores them into the items array

    render() {
        return (
            <div>
            <h1>Create a Product Listing</h1>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <br/>
                <input type="text"
                    id="name"
                    size="50"
                    name="name"
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })} />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <br/>
                <input type="text"
                    id="quantity"
                    name="quantity"
                    size="50"
                    value={this.state.quantity}
                    onChange={event => this.setState({ quantity: event.target.value })} />
            </div>

            <div >
                <label htmlFor="typeId">Type</label>
                <br/>
                <select id="typeId"
                    name="typeId"
                    size="1"
                    value={this.state.typeId}
                    onChange={event => this.setState({ typeId: event.target.value })}>
                    <option></option>
                    {
                        this.types.map(x => <option key={x.id} value={x.id}>{x.name}</option>)
                    }
                </select>
            </div>
``
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <br/>
                <input type="text"
                    id="price"
                    name="price"
                    size="50"
                    value={this.state.price}
                    onChange={event => this.setState({price : event.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <br/>
                <input type="text"
                    id="location"
                    name="location"
                    size="50"
                    value={this.state.location}
                    onChange={event => this.setState({location : event.target.value })} />
            </div>
            <div className="form-group">
            <label>Confirm with your Distributor Name</label>
            <br/>
            <input type="text"
                    id="distName"
                    name="distName"
                    size="50"
                    value={this.state.Distributorname}
                    onChange={event => this.setState({Distributorname: event.target.value })} />
            </div>
            <button type="button"
                    className="btn btn-success"
                    onClick={() => this.onSave()}>
                    Save
                </button>
                <Link className="btn btn-link back-button" to="/home">
                Return Home
                </Link>
        </div>
        
        )}
}