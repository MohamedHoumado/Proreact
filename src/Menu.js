import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props){
    return (
        <div className='Menu'>
           <ul >
           <NavLink to="">
            <li className='Logo'>Logo</li>
            </NavLink>
            <NavLink to="/">
            <li>Accueil</li>
            </NavLink>
            <NavLink to="/Apropos">
            <li>A propos</li>
            </NavLink>
            <NavLink to="/Galerie">
            <li>Galerie</li>
            </NavLink>
            <NavLink to="/Services">
            <li>Services</li>
            </NavLink>
            <NavLink to="/Formation">
            <li>Formation</li>
            </NavLink>
            <NavLink to="/Contact">
            <li>Contact</li>
            </NavLink>
            
            </ul> 
        </div>
    );
}

export default Menu;