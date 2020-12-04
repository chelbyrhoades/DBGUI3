import React from 'react';
import { Repository } from '../api/repository';
import { Item } from '../models/Item';
import { PPEtypes } from '../models/PPEtypes';
import { Link} from 'react-router-dom';
/*
So that the distributors can post/delete listings
*/

//(Distributorname, name, quantity, price, location, imgurl)

export class PostListing extends React.Component{
  repository = new Repository;
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
        }
      };
    
      //function that calls on axios to push a new listing
      onSave(product){
        let body = {
          name: this.state.name,
          quantity: this.state.quantity,
          imageURL: this.state.imageUrl,
          price: this.state.price,
          cookie: window.cookie
        }
        this.repository.postNewListing(body)
                .then(() => {
                    alert('Listing added!');
                
                })
                .catch(err => alert(err));
                
      }

    //need method that returns all the products from the selected distributor ID
    //stores them into the items array

    render() {
        return (
          <div className="container">
                <h3>Create Listing</h3>
                <label htmlFor="prod-name">Product Name</label>
                <input className="form-control"
                    type="text" 
                    name="name" 
                    id="prod-name"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                />
                <label htmlFor="prod-quantity">Price</label>
                <input className="form-control"
                    type="text" 
                    name="quantity" 
                    id="prod-quantity"
                    value={this.state.quantity}
                    onChange={e => this.setState({quantity: e.target.value})}
                />
                <label htmlFor="typeId">Type</label>
                <select id="typeId"
                    className="form-control"
                    name="typeId"
                    size="1"
                    value={this.state.typeId}
                    onChange={event => this.setState({ typeId: event.target.value })}>
                    <option></option>
                    {
                        this.types.map(x => <option key={x.id} value={x.id}>{x.name}</option>)
                    }
                </select>
                <label htmlFor="prod-loc">Location</label>
                <input className="form-control"
                    type="text" 
                    name="country" 
                    id="prod-loc"
                    value={this.state.country}
                    onChange={e => this.setState({country: e.target.value})}
                />
                <label htmlFor="prod-img">Product image URL</label>
                <input className="form-control"
                    type="text" 
                    name="imgurl" 
                    id="prod-img"
                    value={this.state.imgURL}
                    onChange={e => this.setState({imgurl: e.target.value})}
                />
                <label>Confirm with your Distributor Name</label>
                <input type="text"
                        className="form-control"
                        id="distName"
                        name="distName"
                        size="50"
                        value={this.state.Distributorname}
                        onChange={event => this.setState({Distributorname: event.target.value })} />
                <div className="row">
                  <div className="col">
                    <Link type="button"
                          className="btn btn-success btn-block"
                          to="/home"
                          onClick={() => this.onSave()}>
                          Save
                    </Link>
                  </div>
                  <Link className="btn btn-link back-button col" to="/home">
                    Return Home
                  </Link>
                </div>
                
                
            </div>
            
        
        )}
        /*<div className="container">
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
        </div>*/
}