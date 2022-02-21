import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Nav= styled.div`
 background:rgb(9, 9, 12);
 color:white;
 width:100%;
 min-height:80px;
 overflow:hidden;
 display:flex;
 align-items:center;
 justify-content:space-between;
`;

const Logo = styled.img`
width:100px;
height:40px;
cursor:pointer;
`;



const NavMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:50px;
text-align:center;
flex-wrap:wrap;
margin-right:10%;
a{
  display:flex;
  color:white;
  align-items:center;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-right:10px;
  
 span{
   position:relative;
  &:after{
    content:"";
    width:70px;
    height:2px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    background:white;
    position:absolute;
    left:0;
    top:20px;
    transform:scaleX(0);
  }
}

&:hover{
  span:after{
    transform:scaleX(1);
  }
}

}
`;

const NavIcons = styled.img`
width:40px;
height:25px;
`;

const LeftMenu = styled.div`
align-items:center;
display:flex;
cursor:pointer;
margin:10px;

span{
  text-transform:uppercase;
  margin:5px;
}

`;

const Profileimg = styled.img`
width:50px;
border-radius:50%;
height:50px;
cursor:pointer;
`;


const Header = () => {
  return (
    <Nav>
        <Link to="/"><Logo src="../images/logo.svg"/></Link>
        <NavMenu>
        <Link to="/">
          <NavIcons src="../images/home-icon.svg"/>
          <span>Home</span>
          </Link>
        <Link to="/details"><NavIcons src="../images/search-icon.svg"/><span>Search</span></Link>
        <a href="/"><NavIcons src="../images/watchlist-icon.svg"/><span>watchList</span></a>
        <a href="/"><NavIcons src="../images/original-icon.svg"/><span>orignals</span></a>
        <a href="/"><NavIcons src="../images/movie-icon.svg"/><span>Movies</span></a>
        <a href="/"><NavIcons src="../images/series-icon.svg"/><span>series</span></a>
        </NavMenu>

        <LeftMenu>
          <span>User</span>
          <Profileimg src="data:image/jpeg;base64,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"/>
        </LeftMenu>
    </Nav>
  )
}

export default Header