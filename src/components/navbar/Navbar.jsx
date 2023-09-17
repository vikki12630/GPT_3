import { useState } from 'react';
import "./navbar.css"
import openmenu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

import logo from "../../assets/logo.svg";

// BEM

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Study</a></p>
    <p><a href="#blog">Liabrary</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <image src={close} onClick={() => setToggleMenu(false)} />
          : <image src={openmenu}  onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-centre'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar