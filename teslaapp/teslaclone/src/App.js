import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <>
   <Homepage />
    </>
  )
}

const Homepage = ()=>{
  return(
<>
<Header />
<Section />
</>
  );
}


const Section = ()=>{
  return (
  <>
  <Home title="Model 3" desc="order online for touchless delivery." leftbtn="Customer order" rightbtn="Existing Investing" img="model-3.jpg"/>
  <Home title="Model s" desc="order online for touchless delivery." leftbtn="Customer order" rightbtn="Existing Investing" img="model-s.jpg"/>
  <Home title="Model x" desc="order online for touchless delivery." leftbtn="Customer order" rightbtn="Existing Investing" img="model-x.jpg"/>
  <Home title="Model y" desc="order online for touchless delivery." leftbtn="Customer order" rightbtn="Existing Investing" img="model-y.jpg"/>
  <Home title="Solar Panels" desc="Lowest Cost Solar Panels in America" leftbtn="Customer order" rightbtn="Existing Investing" img="solar-panel.jpg"/>
  <Home title="solar roof" desc="Produce Clean Energy From Your Roof" leftbtn="Customer order" rightbtn="Existing Investing" img="solar-roof.jpg"/>
 
  </>
  );
} 

export default App