import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { SpotifyBody } from './styles';

const Player = () => {
  return (
    <>
      <SpotifyBody>
        <Sidebar />
        <Body />
      </SpotifyBody>
      <Footer />
    </>
  );
}

export default Player;
