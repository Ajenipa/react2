import {React,useState} from 'react';
import "./Navbar.css"
import Button from "../Button"
import { Link } from 'react-router-dom';
const Navbar=()=>{
    const [click,setClick]=useState(false)
    const [ button,setButton] = useState(true)
    const closemobileMenu=()=>{
        setClick(false)
    }
    const showbutton=()=>{
        if(window.innerWidth <= 960){
            setButton(false)

        }else{
            setButton(true)

        }
    }
    window.addEventListener("resize", showbutton)
    
    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closemobileMenu}>
          
          Travel Blog<i className="fas fa-passport"/>
  
          </Link>
          <div className='menu-icon' onClick={()=>setClick(!click)}>
          <i className={click ? "fas fa-times" : " fas fa-bars"} />        
          </div>
          <ul className={click ? "nav-menu active":"nav-menu"}>
              <li className='nav-item'>
                  <Link to="/" className='nav-links' onClick={closemobileMenu}>
                      Home
                  </Link>
            </li>
            <li className='nav-item'>
                  <Link to="/services" className='nav-links' onClick={closemobileMenu}>
                      Service
                  </Link>
            </li>
            <li className='nav-item'>
                  <Link to="/product" className='nav-links' onClick={closemobileMenu}>
                      Products
                  </Link>
            </li>
            <li className='nav-links-mobile'>
                  <Link to="/register" className='nav-links' onClick={closemobileMenu}>
                      Register
                  </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

        </div>
        
        </nav>
        
        
        </>
    )
}
export default Navbar