import React from 'react';
import axios from 'axios';
import {repository} from '../api/repository';
import {Link, Redirect} from 'react-router-dom';


export class EditProfile extends React.Component{
    repo = new repository();
    state = {

        
        data: {
            name: "Jill",
        email: "j@hotmail.com",
        typeName: "user",
        phone: "293-929-1123",
        country: "US",
        streetAddress: "320 Hills Dr"
        }
    };
    //edit profile - updates current info and sends to POST
    onSave() {
        if (this.state.id) {
            this.repo.updateAccount(this.state.id, this.state)
                .then(() => {
                    alert('Account updated!');
                    this.setState({ redirect: '/home' });
                });
        }
    }
    render() {
        return <form className="container">
            <h1>Edit Profile</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.data.name}
                    onChange={ event => this.setState({ name: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.data.email}
                    onChange={ event => this.setState({ email: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="Country">Phone Number</label>
                <input type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={this.state.data.phone}
                    onChange={ event => this.setState({ phone: event.target.value }) } />
            </div>


            <div className="form-group">
                <label htmlFor="Country">Country</label>
                <input type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    value={this.state.data.country}
                    onChange={ event => this.setState({ country: event.target.value }) } />
            </div>
            <button type="button"
                    className="btn btn-success"
                    onClick={() => this.onSave()}>
                    Save
            </button>
            
            
        </form>;
    }

}