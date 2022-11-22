import { Avatar } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice';
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles';

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Search />
        <input type='text' placeholder='Search for Artist, Songs, or other' />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0].url} alt={user?.id}/>
        <h4>{user?.id}</h4>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
