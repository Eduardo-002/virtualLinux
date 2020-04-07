import React from 'react';
import {useHistory} from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const LoginForm = (props) => {
  const {classes,lor,setInputValue,doLogin,doRegist} = props;

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {lor?'Log In':'Sign Up'}
        </Typography>
        <form className={classes.form} onClick={(e)=>e.preventDefault()} noValidate>
          <Grid container spacing={2}>
            {
              lor?
              null :
              <><Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>setInputValue('firstName',e)}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>setInputValue('lastName',e)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid></>
            }
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>setInputValue('email',e)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>setInputValue('password',e)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {
              lor?
              null :
              <Grid item xs={12}>
                <TextField
                  onChange={(e)=>setInputValue('confirmPassword',e)}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
              </Grid>
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={lor?()=>doLogin():()=>doRegist()} 
          >
            {lor?'Log In':'Sign Up'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button href={lor?'/regist':'/login'} color='primary' size='small'>
                {lor?"Don't have an account? Sign Up":"Already have an account? Sign in"}
              </Button>              
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;

/*

<Grid item xs={12}>
  <FormControlLabel
    control={<Checkbox value="allowExtraEmails" color="primary" />}
    label="I want to receive inspiration, marketing promotions and updates via email."
  />
</Grid>




*/