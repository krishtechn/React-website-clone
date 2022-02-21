import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Moviesdata from "./Moviesdata";


const Movies = ({title}) => {
    console.log(title);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };


    return (
    <Container>
        <h3 style={{color:"white",fontSize:30,fontWeight:"bold",fontFamily:"sans-serif",letterSpacing:2,}}>{title}</h3>
       <Content {...settings}>
           
       {Moviesdata.map((items)=>{
           return <Wrap>
           <Img src={items.img}/>
            </Wrap>;
         })}

          </Content>
       </Container>
  )
}


const Container = styled.div`
width:96%;
margin:0 auto;
`;

const Content = styled(Slider)`
width:100%;
display:grid;
grid-template-columns:auto auto auto;
grid-gap:20px;

`;

const Wrap = styled.div`
text-align:center;
overflow:hidden;
padding:20px 0;
height:40vh;
width:90%;
`;

const Img = styled.img`
width:90%;
height:100%;
margin:0 auto;
border-radius:10px;
border:4px solid rgb(38, 42, 58);
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

export default Movies;