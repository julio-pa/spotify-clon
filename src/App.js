import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login/login';
import Player from './components/Player/Player';
import { selectToken, SET_TOKEN } from './Features/TokenSlice';
import { selectUser, SET_USER } from './Features/UserSlice';
import { getTokenFromURL } from './spotifyLogic';

const spotify = new SpotifyWebApi();

function App() {

  const dispatch = useDispatch();

  const token = useSelector(selectToken)
  const user = useSelector(selectUser)

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;
    if (_token) {
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => dispatch(SET_USER(user)));
      console.log(token);
      spotify.getPlaylist().then(playlist => console.log(playlist))
    }

  }, [dispatch, token]);

  return (
    <div>
      {
        user ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
