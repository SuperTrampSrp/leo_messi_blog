import {React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/assets/leomessi_logo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">Who is Messi?</a></p>
    <p><a href="#possibility">Quotes</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gtp3__navbar'>
      <div className='gtp3__navbar-links'>
        <div className='gtp3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gtp3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gtp3__navbar-sign'>
        <p>Sign In</p>
        <button type='submit'>Sign Up</button>
      </div>
      <div className='gtp3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick = {()=> setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick = {()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gtp3__navbar-menu_container scale-up-center' >
            <div className='gtp3__navbar-menu_container-links'>
              <Menu/>
              <div className='gtp3__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='submit'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar