import React from 'react';
import Header from './Header';
import { BodyContainer, Icons, Info, InfoText, Songs } from './styles';
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/PlaylistSlice';
import { Favorite, MoreHoriz, PlayCircleFilled, PlaylistAdd } from '@material-ui/icons';
import SongsRow from './SongsRow';


const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log(playlist)
  return (
    <BodyContainer>
      <Header/>
      <Info>
        <img src={playlist?.images[0]?.url} alt='play'/>
        <InfoText>
          <h4>playlist</h4>
          <h2>
            {playlist?.name}
          </h2>
          <p><b>Chris Brown</b> y más</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilled fontSize='large' className='playButton' />
          <Favorite  className='heart' fontSize='large' />
          <MoreHoriz className='dot' fontSize='large' />
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongsRow track = {item.track} key= {index}/>
          ))
        }
      </Songs>
    </BodyContainer>
  );
}

export default Body;
