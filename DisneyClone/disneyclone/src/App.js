import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Viewers from './Components/Viewers'
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Details from './Components/Details';
import Login from './Components/Login';


const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Header />
         <Routes>
           <Route path='/'><Login /></Route>
           <Route path='/Home'><Home /></Route>
           <Route path="/details"><Details /></Route>
        </Routes>
      </BrowserRouter>
      
      </div>
  )
}

export default App