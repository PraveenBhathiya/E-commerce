import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown_icon from '../Assets/nav_dropdown_icon.png'

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    
    const dropdown_toggle = (e) => {
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
    }
 
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li><Link style={{ textDecoration: 'none' }} to='/' onClick={() => setMenu("shop")}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li><Link style={{ textDecoration: 'none' }} to='/mens' onClick={() => setMenu("mens")}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li><Link style={{ textDecoration: 'none' }} to='/womens' onClick={() => setMenu("womens")}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li><Link style={{ textDecoration: 'none' }} to='/kids' onClick={() => setMenu("kids")}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
               {localStorage.getItem('auth-token')
               ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
               :<Link to='/login'><button>Login</button></Link>} 
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}
