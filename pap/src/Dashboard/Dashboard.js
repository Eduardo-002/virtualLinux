import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

import useStyles from './Style';

import AppBarComponent from './AppBarComponent/AppBarComponent';
import DrawerComponent from './Drawer/Drawer';
import NewsComponent from './News/News';
//import classes from '*.module.css';

const firebase = require('firebase');

const Dashboard = (props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [news, setNews] = useState([]);

  const history = useHistory();
  const historyPush = (newPath) => {
    history.push(newPath);
  }

  firebase.auth().onAuthStateChanged(async _usr => {
    if(!_usr)
      historyPush('/login');
    else {
      await firebase.firestore().collection('news').get().then(async res => {
        const _news = res.docs.map(_doc => _doc.data());
        await setNews(_news);
      })
    }
  });

  const signOut = () => firebase.auth().signOut();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      <DrawerComponent handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} signOut={signOut} historyPush={historyPush}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          window.location.pathname=='/dashboard/news' ?
          <NewsComponent news={news}/> :
          window.location.pathname=='/dashboard/ranking' ?
          "ranking" :
          <Redirect from="/dashboard" to="/dashboard/news" />
        }
      </main>
    </div>
  );
}

export default Dashboard;