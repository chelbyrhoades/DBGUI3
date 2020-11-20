import axios from 'axios';
import React from 'react';
import { CreateAccount } from './CreateAccount';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
import {repository} from '../api/repository';

 export class Login extends React.Component {

    repo = new repository();

    state = {

      email: "",
      password: "",
      accountType: "",
      success: false

    }

    handleLogin = () => {

      this.repo.login(this.state.email, this.state.password);
      this.props.onLogin();
      this.setState({success: true});

    }

    render() {

      return (
        <div className="container">
          <h3>Login</h3>
          <label htmlFor="email">Email</label>
          <input className="form-control" 
            type="text" 
            name="email" 
            id="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <label htmlFor="password">Password</label>
          <input className="form-control" 
            type="password" 
            name="password" 
            id="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
          <div className="alert alert-danger" role="alert">Sample error -- for user doesnt exist or wrong password</div>
          <button className="btn btn-primary btn-block" onClick={this.handleLogin}>Login</button>
          <span>Don't have an account? </span>
          <Link to="/create">
            Create Account
          </Link>
          {this.state.success && <Redirect to="/home"/>}
        </div>
      );

    }

 }