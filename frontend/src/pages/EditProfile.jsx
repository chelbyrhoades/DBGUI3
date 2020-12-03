import React from 'react';
import axios from 'axios';
import {Repository} from '../api/repository';
import {Link, Redirect, withRouter} from 'react-router-dom';


class EditProfile extends React.Component{
    repo = new Repository();
    state = {

        
        data: {
            name: "",
            email: "",
            typeName: "",
            phone: "",
            country: "",
            streetAddress: ""
        }
    };
    //edit profile - updates current info and sends to POST
    onSave() {
        if (this.state.id) {
            this.repo.updateAccount(this.state.id, this.state)
                .then(() => {
                    alert('Account updated!');
                    this.setState({ Redirect: '/home'});
                });
        }
    }
    componentDidMount() {
        //getting current user details so that they can update them
        const id = this.props.match.params.id;
        this.repo.getAccountInfo(id)
        .then(userData => this.setState({data: userData[0]})
        
        );
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
            <div className="row">
                <div className="col">
                    <Link to={`/user/${this.props.match.params.userId}`}>Return to profile</Link>
                </div>
                <div className="col">
                    <button type="button"
                        className="btn btn-success float-right"
                        onClick={() => this.onSave()}>
                        Save
                    </button>
                </div>
            </div>
            
            
            
        </form>;
    }
    
}
export default withRouter(EditProfile);