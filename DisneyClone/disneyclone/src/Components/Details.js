import React from 'react'
import styled from 'styled-components'



const Details = () => {
  return (
    <Container>
      <Aligncontains>
      <ImgTitle>
        <Img src="../images/logo.svg" />
      </ImgTitle>
      <DetailsContainer>
        <PlayButton><Imgs src="../images/play-icon-black.png"/> <span>PlayButton</span></PlayButton>
        <TrailButton><Imgs src="../images/play-icon-white.png"/> <span>TrailButton</span></TrailButton>
     
        <AddButton>
        <h1>+</h1>
      </AddButton>

      <GroupWatchButton>
          <img src="../images/group-icon.png"/>
      </GroupWatchButton>
      </DetailsContainer>
      <Contains>
        <Title>2018 + 7m + family, fantasy, kids, animation.</Title>
        <Subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis consequatur obcaecati. Vitae molestias velit quae eaque recusandae esse aperiam error quas minus totam necessitatibus, ut quaerat minima excepturi praesentium?</Subtitle>
      </Contains>
      </Aligncontains>
    </Container>
  )
}

const Container = styled.div`
 position:relative;
 height:100vh;
 overflow:hidden;
 &:before{
  content:"";
 height:100%;
  background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sO0ee4nu-pGMNy6CzvdBSu9eBiNCs86kOw&usqp=CAU");
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  width:100%;
  position:absolute;
  top:-24px;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
  object-fit:cover;
  opacity:0.9;
}
`;

const Aligncontains = styled.div`
 margin-left:40px;
`;

const ImgTitle = styled.div`
width:23%;
height:30vh;
margin:20px 0 0 0;
`

const Img = styled.img`
width:100%;
height:100%;
`
const DetailsContainer = styled.div`
 width:40%;
 padding:5px 0;
 display:flex;
 align-items:center;
 flex-direction:row;
 
`;

const PlayButton = styled.button`
display:flex;
align-items:center;
border:none;
padding:0.4rem 1rem;
outline:none;
background:white;
cursor:pointer;
border-radius:4px;
border:1px solid white;
transition:all 250ms ease-in-out;
span{
  letter-spacing:2px;
font-size:15px;
font-weight:bold;

}

&:hover{
  background:transparent;
  border:1px solid white;
 
  color:white;
}
`;

const Imgs = styled.img`
width:30px;
height:30px;
`;

const TrailButton = styled(PlayButton)`
transition:all 250ms ease-in-out;
background-color:transparent;
margin-left:20px;
color:white;
span{
  text-transform:uppercase;
}
&:hover{
  background:rgba(0, 0, 0,0.19);
  color:white;
  border:1px solid white;
}

`;

const AddButton = styled.div`
border:2px solid white;
font-size:15px;
width:30px;
height:30px;
align-items:center;
background-color:rgba(0, 0, 0,0.19);
justify-content:center;
display:flex;
border-radius:50%;
margin-left:20px;
color:white;
cursor:pointer;
`;

const GroupWatchButton = styled(AddButton)`
 margin-left:20px;
 background-color:rgba(0, 0, 0,0.19);
`;

const Contains = styled.div`
padding:0.1rem 0 0 0;
width:68%;
line-height:20px;
`;

const Title = styled.h5`
font-size:25px;
font-weight:bold;
color:rgb(247, 247, 247);
Text-transform:capitalize;
letter-spacing:1px;
margin-bottom:2px;
`;

const Subtitle = styled.p`
font-size:15px;
font-weight:bold;
color:rgb(247, 247, 247);
line-height:1.4;
letter-spacing:1px;
Text-transform:capitalize;
`;


export default Details