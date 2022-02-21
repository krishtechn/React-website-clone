import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <Carousel {...settings}>
    <Wrap>
    <img src="../images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
    <img src="../images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
    <img src="../images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
    <img src="../images/slider-scales.jpg" alt="" />
      </Wrap>
  </Carousel>

  )
}


const Carousel = styled(Slider)`
width:90%;
position:relative;
top:20px;
margin:0 auto;

.slick-list{
    overflow:visible;
}

li.slick-active button:before{
    color:white;
}

button{
    z-index:1;
}

ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}
`;

const Wrap = styled.div`
 img{
    height:100%;
    border-radius:4px;
&:hover{
    border:2px solid white;
}
 }
`;


export default ImageSlider;