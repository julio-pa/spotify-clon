import React from 'react';

import { LoginContainer, LoginButton } from './styles';

const endpoint = "https://accounts.spotify.com/authorize";
const clientID = "ff5de3d4d68244d9b8b49283a3e81828"
const redirectUri = "http://localhost:3000/"
const scopes =["user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",]

const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`

const Login = () => {
  return (
    <LoginContainer>
      <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='logo-spotify'/>
      <LoginButton href={loginURL}>Login with spotify</LoginButton>
    </LoginContainer>
  );
}

export default Login;
