import React from 'react'
import styled from 'styled-components'


const Viewers = () => {
  return (
    <Container>
      <Wrap>
          <Img src="../images/viewers-disney.png"/>
      </Wrap>
      <Wrap>
          <Img src="../images/viewers-marvel.png"/>
      </Wrap>
      <Wrap>
          <Img src="../images/viewers-national.png"/>
      </Wrap>
      <Wrap>
          <Img src="../images/viewers-pixar.png"/>
      </Wrap>
      <Wrap>
          <Img src="../images/viewers-starwars.png"/>
      </Wrap>
      </Container>
  )
}

const Container = styled.div`
 margin:5px auto;
 display: grid;
 width:95%;
 padding:20px;
 grid-gap:20px;
 text-align:center;
 grid-template-columns: auto auto auto auto auto;
`;


const Wrap = styled.div`
  background:rgb(22, 25, 37);
  flex:1;
  display:flex;
  height:20vh;
  margin-top:40px;
  justify-content:center;
  align-items:center;
  border:4px solid rgb(38, 42, 58);
  border-radius:10px;
  transition:all 1s ease;
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
             rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  &:hover{
    transform: scale(1.05);
    box-shadow:rgb(0 0 0 / 63%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    border-color:rgba(249,249,249,0.3);
  }
`;

const Img = styled.img`
width:100%;
object-fit:cover;
`;


export default Viewers