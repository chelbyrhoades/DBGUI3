import React from 'react';
import axios from 'axios';
import {Repository} from '../api/repository';
import {Link, Redirect, withRouter} from 'react-router-dom';


class EditProfile extends React.Component{
    repo = new Repository();
    state = {
        deleting: false,
        
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
        }else{
            this.repo.updateAccount(198)
            .then(() => {
                alert('Account updated!');
                this.setState({ Redirect: '/home'});
            });
        }
    }
    onDelete() {
        this.setState({deleting: true});
        if(this.state.id){
            this.repo.deleteAccount()
            .then(() => {
                this.setState({ Redirect: '/'});
            });
            this.setState({ Redirect: '/'});
            
        }else if(this.state.deleting == false){
            this.repo.deleteAccount();
        }
    }
    componentDidMount() {
        //getting current user details so that they can update them
        const id = this.props.match.params.userId;
        this.repo.getAccountInfo(id)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        
    }
    render() {
        return( 
            <form className="container">
                <div className="form-group">
                <div className= "card">
                <div className= "card-title">
                    <h1>Account Details Editor</h1>
                </div>
                <label>
                    <strong>Name: </strong>{this.state.data.name}
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={ event => this.setState({ name: event.target.value }) } />
                </label>

                <label>
                    <strong>Email: </strong>{this.state.data.email}
                <input type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={ event => this.setState({ email: event.target.value }) } />
                </label>

                
                <label>
                    <strong>Address: </strong>{this.state.data.streetAddress}
                <input type="text"
                    id="addr"
                    name="addr"
                    className="form-control"
                    onChange={ event => this.setState({ streetAddress: event.target.value }) } />
                </label>

                <label>
                    <strong>Country: </strong>{this.state.data.country}
                <input type="text"
                    id="addr"
                    name="addr"
                    className="form-control"
                    onChange={ event => this.setState({ country: event.target.value }) } />
                </label>


                <label>
                    <strong>Phone Number: </strong>{this.state.data.phone}
                <input type="text"
                    id="addr"
                    name="addr"
                    className="form-control"
                    onChange={ event => this.setState({phone: event.target.value }) } />
                </label>

                    <input type="submit" value="Submit" />
                    </div>
                    </div>
                </form>
        
        
        )}
    
}
export default withRouter(EditProfile);
/*

        <form className="container">
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
            <button type="button" class="btn btn-danger" className="btn btn-success float-left" onClick={() => this.onDelete()}>
                Delete Account
            </button>
            
            {this.state.deleting && <Redirect to="/"/>}
        </form>;
*/