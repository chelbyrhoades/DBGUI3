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
import  EditProfile  from './pages/EditProfile.jsx';
import  UserProfile  from './pages/UserProfile.jsx';
import { User } from "./models/User";
import { MyCart } from './pages/myCart';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(new User);

  function onLogin() {
    setUser(new User(0,"email@email.com","User","111-111-1111","password","USA"));
    setLoggedIn(true);
  }

  function getUser() {
    return user.id;
  }
  
  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} user={user}/>
        <Switch>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/orders/:orderId" component={OrderHistory}/>
            <Route path="/home" component={Home}/>
            <Route path="/listing/:id" component={ListingEditor}/>
            <Route path="/createListing" component={PostListing}/>
            <Route path="/user/edit/:userId" component={EditProfile}/>
            <Route path="/user/:id" component={UserProfile}/>
            <Route path="/orders/:userId" component={OrderHistory}/>
            <Route path="/cart" component={MyCart}/>
            <Route path="/" render={() => <Login onLogin={onLogin}/>}/>
        </Switch>
      </Router>
    </div>
    
  );

}



export default App;
