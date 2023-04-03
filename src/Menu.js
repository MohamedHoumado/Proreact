import React from 'react';

import { NavLink } from 'react-router-dom';
import "./App.css";

function Menu(props){
    return (
        <div className='Menu'>
           <ul >
           <NavLink to="">
            <li className='Logo'>Logo</li>
            </NavLink>
            <NavLink to="/proreact">
            <li>Accueil</li>
            </NavLink>
            <NavLink to="/Apropos">
            <li>A propos</li>
            </NavLink>
            <NavLink to="/Galerie">
            <li>Galerie</li>
            </NavLink>
            <NavLink to="/Caroussel">
            <li>Caroussel</li>
            </NavLink>
            <NavLink to="/Services">
            <li>Services</li>
            </NavLink>
            <NavLink to="/Formation">
            <li>Formation</li>
            </NavLink>
            <NavLink to="/Calculatrice">
            <li>Calculatrice</li>
            </NavLink>
            <NavLink to="/Inscriptions">
            <li>Inscriptions</li>
            </NavLink>
            <NavLink to="/Contact">
            <li>Contact</li>
            </NavLink>
            
            </ul> 
        </div>
    );
}

export default Menu;