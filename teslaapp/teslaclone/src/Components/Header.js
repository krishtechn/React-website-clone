import * as React from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Container = styled.div`
min-height:10px;
align-items:center;
display:flex;
position:fixed;
z-index:1;
flex-direction:row;
padding:10px 5px;
left:0;
right:0;
justify-content:space-between;
`;

const CenterMenu = styled.div`
display:flex;


@media screen and (max-width:917px){
  display:none;
}

p{
  padding:0.3rem 0.1rem;
  transition:50s ease;
  &:hover{
  background:rgb(202, 221, 230);
  border-radius:30px;
  color:white;
  cursor:pointer;
}

a{
  flex-wrap:wrap;
}

}

`;

const Rightmenu = styled.div`
display:flex;
padding:0.3rem 0.1rem;

@media screen and (max-width:917px){
  padding:0px;
  font-size:12px;
}
`;

const RightLeftmenu = styled.div`
display:flex;
@media screen and (max-width:917px){
 display:none;
}
`;

const BurgerNavbar = styled.div`
background:white;
list-style-type:none;
position:fixed;
top:0;
right:0;
bottom:0;
width:20%;
text-align:left;
color:black;
transition:0.3s ease;
transform:${(props)=>props.transform == true?"translateX(0)":"translateX(100%)"};
padding:30px 0;
letter-spacing:3px;
//display:none;

@media screen and (max-width:500px){
  width:50%;
}

li{
  margin-top:50px;
margin-left:40px;
  padding:0.3rem 0rem;
  border-bottom:1px solid gray;
  width:70%;
  &:hover{
    background:#f1f1f1;
    width:90%;
    cursor:pointer;
  }
}
li,a{
  color:black;
  font-weight:bold;
  font-size:16px;
  letter-spacing:1px;
}
`;


const Info = styled.div`
display:flex;
flex-direction:column;
margin-top:10px;
margin-bottom:10px;
`;

const toggles = styled(BurgerNavbar)`
 display:none;
`;

const Header = () => {
  const [isburgeropen,setisburgeropen] = React.useState(false);
  const [rotate,setrotate] = React.useState(0);
//   const [scroll,setscroll] = React.useState(window.scrollY);
//  console.log(scroll);
//  React.useEffect(()=>{
//   if(scroll > 0){
//     setisburgeropen(false);
//     }else if(scroll == 0){
//       setisburgeropen(true);
//     }
//  })

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" style={{ textalign: "center", cursor: "pointer",  padding:"0.3rem 0.1rem", }} />
      </a>

      <CenterMenu>
        <p><a href="">Model S</a></p>
          <p><a href="">Model 3</a></p>
          <p><a href="">Model X</a></p>
          <p><a href="">Model Y</a></p>
          <p><a href="">Solar Roof</a></p>
          <p><a href="">Solar Panels</a></p>
      </CenterMenu>


      <Rightmenu>
      <RightLeftmenu>
      <p><a href="">Shop</a></p>
          <p><a href="">Account</a></p>
          <p><a href="">Menu</a></p>
      </RightLeftmenu>
 <MenuIcon onClick={()=>setisburgeropen(true)} style={{cursor:"pointer"}} />
      </Rightmenu>
      <BurgerNavbar transform={isburgeropen}>
        <CloseIcon onClick={()=>{setisburgeropen(false); setrotate("180deg")}} style={{position:"absolute",top:"10px",right:"10px",cursor:"pointer",transform: `rotate(${rotate})`,}}  />
        <li><a href="">Model s</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model x</a></li>
        <li><a href="">Solar roof</a></li>
        <li><a href="">Solar panels</a></li>
        <li><details>
          <summary>Features</summary>
          <Info><a href="">shop</a>
          <a href="">Account</a>
          <a href="">Menu</a></Info>
          </details></li>
      </BurgerNavbar>
    </Container>
  )
}

export default Header