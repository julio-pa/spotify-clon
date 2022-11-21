import React from 'react';
import { loginURL, getTokenFromURL } from '../../spotifyLogic';

import { LoginContainer, LoginButton } from './styles';


const Login = () => {
  const token = getTokenFromURL();
  console.log(token)
  return (
    <LoginContainer>
      <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='logo-spotify'/>
      <LoginButton href={loginURL}>Login with spotify</LoginButton>
    </LoginContainer>
  );
}

export default Login;
