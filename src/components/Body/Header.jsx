import { Avatar } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Search />
        <input type='text' placeholder='Search for Artist, Songs, or other' />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>Leo Frank</h4>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
