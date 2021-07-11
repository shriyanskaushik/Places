import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';

export const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to = "/" exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to = "/1/places">MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to = "/places/new">ADD PLACES</NavLink>
            </li>
            <li>
                <NavLink to = "/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}
