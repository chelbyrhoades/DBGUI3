import React from 'react';
import axios from 'axios';
import {repository} from '../api/repository';
import {Link, Redirect} from 'react-router-dom';


export class EditProfile extends React.Component{
    repo = new repository();
    //edit profile - updates current info and sends to POST
    onSave() {
        if (this.state.id) {
            this.repo.updateAccount(this.state.id, this.state)
                .then(() => {
                    alert('Account updated!');
                    this.setState({ redirect: '/home' });
                });
        } else {
            this.accountsRepository.addAccount(this.state)
                .then(() => {
                    alert('Account added!');
                    this.setState({ redirect: '/home' });
                });
        }
    }
    render() {
        return <form className="container">
            <h1>User Profile</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={ event => this.setState({ name: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={ event => this.setState({ email: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="Country">Country</label>
                <input type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    value={this.state.country}
                    onChange={ event => this.setState({ country: event.target.value }) } />
            </div>

            
            
        </form>;
    }

}