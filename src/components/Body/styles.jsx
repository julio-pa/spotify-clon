import styled from "styled-components";

const BodyContainer = styled.div`
  flex: 0.8;
  background: linear-gradient(#550F06, #000);
  color: #fff;
  height: 100vh;
  padding: 30px;
  overflow-y: overlay;
  &::-webkit-scrollbar{
    display: none;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items:center;
  flex: 0.5;
  min-width: 75px;
  background-color: #fff;
  color: #181818;
  border-radius: 30px;
  padding: 10px;

  & input{
    height:30px;
    border:none;
    width:100%;
    &:focus {
      border:none;
      border-radius: 17px
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  & h4{
    margin-left: 15px;
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & img{
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
  }
`

const InfoText = styled.div`
  flex: 1;
  & h1{
    margin-bottom: 10px;
  }
`

const Songs = styled.div`
  margin: 20px -20px;
`

const Icons = styled.div`
  align-items:center;
  & .playButton{
    color:#00ff00;
    font-size: 70px;
    margin-right:17px;
    &:hover{
      transform: scale(1.1);
      cursor: pointer;
    } 
  },
  & .heart{
    color:#00ff00;
    font-size: 50px;
    margin-right:17px;
  },
  & .dot{
    color: #fff;
  }
`
const SongRowContainer = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  z-index: 90;
  color:#fff;
  &:hover{
    cursor:pointer;
    background-color:#000;
    opacity: 0.8;
    color: #fff;
  }
  & img{
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
`

const SongInfo = styled.div`
  margin-left: 20px;
  & p{
    margin-top: 3px;
    color:lightgray;
  }
`



export { BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info, InfoText, Songs, Icons, SongRowContainer, SongInfo, }