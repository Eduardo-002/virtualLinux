import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {useHistory} from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: "AIzaSyAt7jG7uuoAu9AV8pWzHnh9Izlh31lbXV0",
  authDomain: "pap1-369f6.firebaseapp.com",
  databaseURL: "https://pap1-369f6.firebaseio.com",
  projectId: "pap1-369f6",
  storageBucket: "pap1-369f6.appspot.com",
  messagingSenderId: "699724819078",
  appId: "1:699724819078:web:a15f45b5863546d0b6ff07"
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route path='/login'><Login lor={true} /></Route>
      <Route path='/regist'><Login lor={false} /></Route>
      <Route path='/dashboard'><Dashboard /></Route>
      <Redirect from="/" to="/" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
