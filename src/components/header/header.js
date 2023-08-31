import React from 'react'
import HeaderLogo from './../../images/icons/logo.svg'
import './header.css'
import SearchB from '../../images/icons/search.svg'
 function Header() {
  return (
    <header>
        <nav className='navbar'>
           <div className='nav_wrapp container'>
                <img src={HeaderLogo} alt="logo" />
                <div className='links'>
                    <button>home</button>
                    <button>Shop</button>
                    <button>blog</button>
                    <button>Sale</button>
                    <button>contact us</button>
                    <input type="text" className='hidden'/>
                    <button><img src={SearchB} alt="" /> search</button>
                </div>
                <div className='user'></div>
           </div>
        </nav>
        <div className='header_main'>

        </div>
    </header>
  )
}
export default Header;
