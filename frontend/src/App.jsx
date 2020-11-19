import React from 'react';
import './App.css';
import axios from 'axios';
import {Login} from './pages/Login'
import {Header} from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import { CreateAccount } from './pages/CreateAccount';
import { OrderHistory } from './pages/OrderHistory';
import { ItemDetails } from './pages/ItemDetails';
import {Home} from "./pages/Home";

class App extends React.Component {

  state = {
    loggedIn: false,
  }

  onLogin = () => {
    this.setState({loggedIn: true});
  }


  render() {
    
      return (
        <div>
          <Header loggedIn={this.state.loggedIn}/>
          <Router>
            <Switch>
              <Route path="/create">
                <CreateAccount/>
              </Route>
              <Route path="/orders">
                <OrderHistory/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/">
                <Login onLogin={this.onLogin}/>
              </Route>
            </Switch>
          </Router>
        </div>
        
    );
  }

}

export default App;
