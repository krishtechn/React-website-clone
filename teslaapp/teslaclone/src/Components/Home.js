import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
width:100%;
height:100vh;
background-image:${(props)=>`url("/images/${props.bgimg}")`};
background-repeat:no-repeat;
opacity: 0.9;
background-size:cover;
object-fit:cover;
// background-attachment: fixed;
background-position:center;
`;

const Itemdata = styled.div`
text-align:center;
margin-top:30px;
display:flex;
flex-direction:column;
height:94.5vh;
overflow:hidden;
justify-content:space-between;
`;

const ItemText = styled.div`
text-align:center;
margin:70px 20px;
height:20vh;
text-transform:capitalize;
`;

const TitleText = styled.h1`
text-align:center;
font-size:35px;
letter-spacing:2px;
`;

const Desc = styled.p`
text-align:center;
color:gray;
font-size:12px;
margin-Top:5px;
`;

const BtnContainer = styled.div`
padding:10px;
width:90%;
margin:0px auto;
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
@media only screen and (max-width:477px){
  flex-direction:column;
}
`;

const LeftButton = styled.button`
 padding:0.6rem 4rem;
 width:300px;
 border:none;
 outline:none;
 border-radius:30px;
 color:white;
 margin:10px;
 font-weight:bold;
 letter-spacing:2px;
 background:rgb(54, 56, 65);
 transition:0.3s ease;
 &:hover{
   background:rgb(54, 45, 60);
   cursor:pointer;
   color:white;
 }
`;

const RightButton = styled(LeftButton)`
 background:white;
 color:black;
`;


const Arrow = styled.img`
text-align:center;
`;



const Homes = ({title,desc,img,leftbtn,rightbtn}) => {
  return (
    <Wrap bgimg = {img}>
      <Itemdata>
        <ItemText>
         <TitleText>{title}</TitleText>
         <Desc>{desc}</Desc>
       </ItemText>

         <div>
       <BtnContainer>
         <LeftButton>{leftbtn}</LeftButton>
         <RightButton>{rightbtn}</RightButton>
       </BtnContainer>
      
       <div>
       <Arrow src="/images/down-arrow.svg" style={{color:"black",width:"45px",marginBottom:"30px",animation:"bounce 2s linear infinite"}} />
       </div>
       </div>
       </Itemdata>
       </Wrap>
  )
}

export default Homes