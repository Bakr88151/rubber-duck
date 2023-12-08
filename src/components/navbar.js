import React from "react";
import '../style/navbar.css'
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <>
            <nav>
                <ul className='navbarlist'>
                    <li className='logo'>
                        <a href="/"><img alt="logo_image" src={logo} className="logo"/></a>
                    </li>
                    <li>
                    <a href="/contact"className="contact"><span>Contact us</span></a>
                    </li>
                </ul>
            </nav>
        </>
    );
}