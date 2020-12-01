import React from 'react';
import axios from 'axios';
import {repository} from '../api/repository';
import { Link } from 'react-router-dom';
import { EditProfile } from './EditProfile';

export class UserProfile extends React.Component{
    //need get user info call
    repo = new repository();
/*sample:
[{"email":"mallory99@example.net","typeName":"user","name":"Lisandro
Bartoletti","phone":"311-397-6544x46061","streetAddress":null,"state":null,"country":"Mali","zip":null}]
*/
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
        <button> Edit Profile</button>
        
        
            
</form>;
    }//end render
}//end userProfile class

/*


        <table className="table table-condensed table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {
            this.accounts.map(account =>
            <tr key={account.name}>
                <td>
                    {account.name}
                </td>
                <td>{account.email}</td>
                <td>
                </td>
            </tr>)
    }
    </tbody>

</table>


            */