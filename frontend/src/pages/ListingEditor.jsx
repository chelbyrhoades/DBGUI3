import React from "react"
import { repository } from "../api/repository";

export class ListingEditor extends React.Component {

    repository = new repository();

    state = {
        name: "",
        quantity: 0,
        price: 0,
        location: 0,
        imgurl: ""
    }

    handleEdit = () => {
        this.repository.editListing(this.props.match.params.id, this.state);
    }

    render() {
        return (
            <div className="container">
                <h3>Edit Listing</h3>
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
                <label htmlFor="prod-price">Product Name</label>
                <input className="form-control"
                    type="text" 
                    name="price" 
                    id="prod-price"
                    value={this.state.price}
                    onChange={e => this.setState({price: e.target.value})}
                />
                <label htmlFor="prod-loc">Location</label>
                <input className="form-control"
                    type="text" 
                    name="location" 
                    id="prod-loc"
                    value={this.state.location}
                    onChange={e => this.setState({location: e.target.value})}
                />
                <label htmlFor="prod-img">Product image URL</label>
                <input className="form-control"
                    type="text" 
                    name="imgurl" 
                    id="prod-img"
                    value={this.state.imgurl}
                    onChange={e => this.setState({imgurl: e.target.value})}
                />
                <button type="button" className="btn btn-block btn-primary" onClick={this.handleEdit}>Confirm Edit</button>
            </div>
            
        );
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        //get
    }


}