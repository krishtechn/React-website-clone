import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
           <Centercontainer>
             <Imagecontainer>
                 <img src="../images/cta-logo-one.svg" alt="" />
                </Imagecontainer>
             <Button><a href="/Home">Get all there</a></Button>
             <Desc>
             <code>
             Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
             </code>
             </Desc>
             <Imagecontainers>
                 <img src="../images/cta-logo-two.png" alt="" />
                </Imagecontainers>
           </Centercontainer>
    </Container>
  )
}


const Container = styled.div`
 position:absolute;
 z-index:-1;
 display:flex;
 justify-content:center;
 align-items:center;
 color:white;
 position:relative;
 z-index:1;
 &:before{
     content:"";
     background:url("../images/login-background.jpg");
     background-size:cover;
     background-position:center;
     background-repeat:no-repeat;
     width:100%;
     height:calc(100vh - 80px);
     position:absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index:-1;
 }
`;

const Centercontainer= styled.div`
 width:500px;
 margin:4% auto;
 padding:20px;
 height:50vh;
 color:white;
 z-index:1;
`;

const Imagecontainer = styled.div`
height:10vh;
width:100%;
display:flex;
cursor:pointer;
img{
    width:100%;
    height:100%;
  }
`;

const Button = styled.button`
 background:rgb(4, 131, 238);
 width:100%;
 padding:1rem 2rem;
 outline:none;
 border:none;
 font-size:25px;
 font-weight:bold;
 letter-spacing:2px;
 margin-top:20px;
 border-radius:10px;
 color:white;
 text-transform:Uppercase;
 cursor:pointer;
 box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition:all 250ms ease;
 &:hover{
     background:rgb(1, 130, 200);
     box-shadow:rgb(0 0 0 / 63%) 0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transform:scale(1.02);
 }
`;

const Desc = styled.div`
margin-top:10px;
padding:0 0.2rem;
text-align:center;

code{
    font-size:10px;
    text-transform:capitalize;
    line-height:5px;
`;

const Imagecontainers = styled(Imagecontainer)`
margin-top:20px;
height:5vh;
cursor:pointer;
`;

export default Login