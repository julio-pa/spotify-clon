import React from 'react';
import { Playlists, SidebarContainer } from './styles';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import SidebarChoice from './SidebarChoice';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='logo' />
      <SidebarChoice title='Home' Icon={HomeIcon} />
      <SidebarChoice title='Search' Icon={SearchIcon} />
      <SidebarChoice title='Your Library' Icon={LibraryMusicIcon} />
      <Playlists>Playlists</Playlists>
      <hr />
      <SidebarChoice title='R&B' />
      <SidebarChoice title='Hittest pop'  />
    </SidebarContainer>
  );
}

export default Sidebar;
