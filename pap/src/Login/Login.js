import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import useStyles from './Styles';

import LoginForm from './LoginForm';

const firebase = require('firebase');

const Login = (props) => {
  const {lor} = props;
  const [firstName,setFirstName] = useState(null);
  const [lastName,setLastName] = useState(null);
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  
  const setInputValue = (type,e) =>{
    type==='firstName'?
    setFirstName(e.target.value):
    type==='lastName'?
    setLastName(e.target.value):
    type==='email'?
    setEmail(e.target.value):
    type==='password'?
    setPassword(e.target.value):
    type==='confirmPassword'?
    setConfirmPassword(e.target.value):
    console.log('bad Error');
  }

  const history = useHistory();
  const historyPush = (newPath) => {
    history.push(newPath);
  }

  const doRegist = () => {
    if(password!==confirmPassword)return;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email,
          firstName: firstName,
          lastName: lastName
        };
        firebase
          .firestore()
          .collection('users')
          .doc(email)
          .set(userObj)
          .then(()=>{
            historyPush('/dashboard');
          }, dbErr => {
            console.log('Failed to add user to db');
          })
      }, authErr => {
        console.log('Failed to add user');
      })
  }

  const doLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{
        historyPush('/dashboard');
      },err=>{
        console.log('login error: ',err);
      })
  }

  return(
    <LoginForm lor={lor} classes={useStyles()} setInputValue={setInputValue} doLogin={doLogin} doRegist={doRegist}/>
  );
}

export default Login;

/*

<Grid item xs={12}>
  <FormControlLabel
    control={<Checkbox value="allowExtraEmails" color="primary" />}
    label="I want to receive inspiration, marketing promotions and updates via email."
  />
</Grid>




*/