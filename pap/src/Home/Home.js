import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button} from '@material-ui/core';


const Home = (props) => {
  
  const history = useHistory();
  const historyPush = (newPath) => {
    history.push(newPath);
  }

  return(
    <div>
      <h1>Titulo do site</h1>
      <Button onClick={()=>history.push('login')} variant='contained' color='primary'>Log In!</Button>
    </div>
  );
}

export default Home;