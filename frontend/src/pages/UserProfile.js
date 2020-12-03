import React from 'react';
import axios from 'axios';
import {repository} from '../api/repository';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { EditProfile } from './EditProfile';

class UserProfile extends React.Component{
    //need get user info call
    repo = new repository();
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
        return <div className="container">
            <h1>User Profile</h1>
            <div class="pull-right"> 
                    <div class="btn-group"> 
                    <Link to="/home"><button class="btn btn-success">
              Go Back
            </button>
                </Link>
                    </div>
              </div>
            <div class="card">
          <p><strong>Name: {this.state.data.name}</strong></p>
          <p><strong>Email: {this.state.data.email}</strong></p>
          <p><strong>Address: {this.state.data.address}</strong></p>
          <p><strong>Phone Number: {this.state.data.phone}</strong></p>
          <p><strong>Country: {this.state.data.country}</strong></p>
        </div>
        <Link to="/EditProfile"><button type="button" class="btn btn-dark">
              Edit Profile
            </button>
            </Link> 
            <div>
            <Link to="/orders"> <button type="button" class="btn btn-dark">
              Order History
            </button>
            </Link> 
            </div>
            <div class="clearfix"></div> 

</div>;
    }//end render
    
}//end userProfile class
export default withRouter(UserProfile);
