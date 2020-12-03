import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import {Login} from './pages/Login'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CreateAccount } from './pages/CreateAccount';
import { OrderHistory } from './pages/OrderHistory';
import {Home} from "./pages/Home";
import { ListingEditor } from './pages/ListingEditor';
import { PostListing } from './pages/PostListing';
import  EditProfile  from './pages/EditProfile.jsx';
import  UserProfile  from './pages/UserProfile.jsx';
import { User } from "./models/User";
import { MyCart } from './pages/myCart';
import HomeSearch from './pages/HomeSearch';
import { DistributorListings } from './pages/DistributorListings';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [uid, setUid] = useState(-1);
  const [cookie, setCookie] = useState("");

  function onLogin(id) {
    setUid(id);
    setLoggedIn(true);
  }

  function onLogout() {
    setUid(-1);
    setLoggedIn(false);
  }

  function getuid() {
    return uid;
  }
  //<Route path= "/search">
  //<HomeSearch/>
  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} uid={uid} onLogout={onLogout}/>
        <Switch>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/search" component={HomeSearch}/>
            <Route path="/orders/:orderId" component={OrderHistory}/>
            <Route path="/home" component={Home}/>
            <Route path="/listings/:id" component={DistributorListings}/>
            <Route path="/listing/:id" component={ListingEditor}/>
            <Route path="/createListing" component={PostListing}/>
            <Route path="/user/edit/:userId" component={EditProfile}/>
            <Route path="/user/:userId" component={UserProfile}/>
            <Route path="/orders/:userId" component={OrderHistory}/>
            <Route path="/cart" component={MyCart}/>
            <Route path="/" render={() => <Login onLogin={onLogin}/>}/>
        </Switch>
      </Router>
    </div>
    
  );

}



export default App;
