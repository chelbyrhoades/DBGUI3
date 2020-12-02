import React from 'react';
import axios from 'axios';
import {Repository} from '../api/repository';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { EditProfile } from './EditProfile';

class UserProfile extends React.Component{
    //need get user info call
    repo = new Repository();
/*sample:
[{"email":"mallory99@example.net","typeName":"user","name":"Lisandro
Bartoletti","phone":"311-397-6544x46061","streetAddress":null,"state":null,"country":"Mali","zip":null}]
*/
//https://stackoverflow.com/questions/54780789/reactjs-how-to-pass-particular-item-id-from-one-component-to-another-component
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
    handleNameChange(e){
        this.setState({name:e.target.value})
      }
      handlePasswordChange(e){
        this.setState({password:e.target.value})
      }
      //.then(data => console.log({data})
    componentDidMount(){
        const id = this.props.match.params.id;
        this.repo.getAccountInfo(198)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        
    }
  
    render() {
        return <form className="container">
            <h1>User Profile</h1>
            <div className="info">
          <div>Name: {this.state.data.name}</div>
          <div>Email: {this.state.data.email}</div>
          <div>Address: {this.state.data.address}</div>
          <div>Phone Number: {this.state.data.phone}</div>
          <div>Country: {this.state.data.country}</div>
        </div>
        <Link to="/EditProfile"><button>
              Edit Profile
            </button>
            </Link>     
</form>;
    }//end render
    
}//end userProfile class
export default withRouter(UserProfile);
