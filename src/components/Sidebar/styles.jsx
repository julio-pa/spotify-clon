import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 0.2;
  height: 100vh;
  background-color: #000;
  min-width: 240px;
  color: #fff;
  & img{
    height: 60px;
    width: 170px;
    Padding: 10px 10px 10px .7px;
    margin-right: auto;
  }
  & hr{
    border:1px solid smokegray;
    width: 90%;
    margin: 10px auto;
  },
  
`
const Playlists = styled.div`
  margin:5px 10px;
`
const Choices = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 250ms color ease-in;
  &:hover{
    color: #fff;
  }
  & h5 {
    margin: 10px 0 0 20px;

  }
  & h4{
    margin-left: 20px;
  }

` 


export { SidebarContainer, Playlists, Choices }