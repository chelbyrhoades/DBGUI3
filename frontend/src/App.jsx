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
import { CreateListing } from './pages/CreateListing';
import {User} from './models/User';
import { UserProfile } from './pages/UserProfile.jsx';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(new User);

  const onLogin = () => {
    setUser(new User(0,"email@email.com","User","111-111-1111","password","USA"));
    setLoggedIn(true);
  }
    
  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} user={user}/>
        <Switch>
          <Route path="/create">
            <CreateAccount/>
          </Route>
          <Route path="/orders/:orderId">
            <OrderHistory/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/listing/:id" component={ListingEditor}/>
          <Route path="/createListing" component={CreateListing}/>
          <Route path="/user/:id" component={UserProfile}/>
          <Route path="/">
            <Login onLogin={onLogin}/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );

}

export default App;
