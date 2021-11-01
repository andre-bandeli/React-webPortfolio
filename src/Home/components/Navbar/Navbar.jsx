import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="topName">
                <h1>HENRIQUE HOKAMURA</h1>
            </div>
            
            <div className="bottomList"> 
                <nav>
                   <li> <Link to="/"> Home </Link></li>
                   <li> <Link to="/sobre"> Galeria  </Link></li>
                   <li> <Link to="/usuario"> Portfolio </Link></li>
                   <li> <Link to="/academico"> Acadêmico </Link></li>
                   <li> Contato  </li>
                </nav>
                <div id="nav">
                    <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
                    <span id="hamburger"></span>
                    </button>
                    <ul id="menu" role="menu">
                    <li>Home</li>
                   <li> Galeria</li>
                   <li> Portfolio</li>
                   <li> Acadêmico</li>
                   <li> Contato  </li>
                    </ul>
                </div>
                <script src="menu-mobile.js"></script>
            </div>
        </div>
    )
}

export default Navbar;