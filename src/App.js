import React from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import {BrowserRouter as Router,Switch,Routes,Route} from "react-router-dom"
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products'
import Register from './components/pages/Register'
function App() {
  return (
    <div className='App'>
      <>
       <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/home" exact/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/register" element={<Register/>}/>
       </Routes>
        
       </Router>
      
      </>

    </div>
  );
}

export default App;
