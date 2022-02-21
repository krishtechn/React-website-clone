import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import firebase from "../firebase";

const Container = styled.div`
  width:100%;
  position:relative;

  &:before{
    content:"";
    background-image:url("../images/home-background.png");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
  }
`;


const titlemovies = [
  {
          title:"Recommended for you",
  },
  {
        title:"The Simpsons",
   },
    {
      title:"Musicales",
  },
  {
    title:"Documentaries",
  },
];

const Home = () => {

   useEffect(()=>{

  },[])

  return (
    <Container>
       <Apps />
     </Container>
  )
}

const Apps = ()=>{
  return (
    <>
      <ImageSlider />
         <Viewers />
         {titlemovies.map((items)=>{
           return <Movies title={items.title}/>;
         })}
    </>
  );
}

export default Home