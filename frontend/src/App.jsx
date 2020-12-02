import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import {Login} from './pages/Login'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import { CreateAccount } from './pages/CreateAccount';
import { OrderHistory } from './pages/OrderHistory';
import {Home} from "./pages/Home";
import { ListingEditor } from './pages/ListingEditor';
import { PostListing } from './pages/PostListing';
import { EditProfile } from './pages/EditProfile';
import { UserProfile } from './pages/UserProfile';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  }
    
  return (
    <div>
      <Header loggedIn={loggedIn}/>
      <Router>
        <Switch>
          <Route path="/create">
            <CreateAccount/>
          </Route>
          <Route path="/orders">
            <OrderHistory/>
          </Route>
          <Route path="/editProfile">
            <EditProfile/>
          </Route>
          <Route path="/userProfile/:id">
            <User Profile/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/listing/:id" component={ListingEditor}/>
          <Route path="/">
            <Login onLogin={onLogin}/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );

}

export default App;
