import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const Navbar = () => {
  const [menu , setMenu] = useState('home');
  const menuRef =useRef();

  const openMenu=()=>{   
    menuRef.current.style.right='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='navbar'>
      <div className="logo">
        <div className="logo-wrapper">
          <div className="particle-text">Paramjeet</div>
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>
        </div>
        <span className="logo-small"></span>
      </div>
      {/* <img src={logo} alt='logo'/> */}
      {/* <h1>PaRaMjeet</h1> */}
      <img src={menu_open} onClick={openMenu} alt="open" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close" />
      <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu==="home"? <img src={underline} alt=''></img>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"? <img src={underline} alt=''></img>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("service")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt=''></img>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt=''></img>:<></>}</li> 
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt=''></img>:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
