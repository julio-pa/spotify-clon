import { Grid, Slider } from '@material-ui/core';
import { FeaturedPlayListOutlined, PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons';
import React from 'react';
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src='https://th.bing.com/th/id/R.8c3282297f251104b288694a65ba870a?rik=8XowGD%2fXPPCkNw&pid=ImgRaw&r=0' alt='cover' />
        <div>
          <h4>November Rain</h4>
          <p>Guns N' Roses </p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <Shuffle />
        <SkipPrevious />
        <PlayCircleOutline />
        <SkipNext />
        <Repeat />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item><PlaylistPlay></PlaylistPlay></Grid>
          <Grid item><VolumeDown></VolumeDown></Grid>
          <Grid item xs><Slider /></Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;
