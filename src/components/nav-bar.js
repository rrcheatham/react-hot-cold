import React from 'react';

import './nav-bar.css';

export default function NavBar() {
    return (
        <nav className="navigation-bar">
            <ul>
               <li><a href="#">WHAT?</a></li>
               <li><a href="#">+NEW GAME</a></li>
            </ul>
        </nav>
    )
}