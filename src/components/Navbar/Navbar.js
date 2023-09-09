import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss';
// ---------access-state------------

export default function Navbar(props) {
  return (
    <div className={ props.toggleMenu  ? 'nav-wrapper nav-open' : 'nav-wrapper'}>
      <nav>
        <ul>
          <li><NavLink to="/collections/all">ALL</NavLink></li>
          <li><NavLink to="/collections/marriage">MARRIAGE</NavLink></li>
          <li><NavLink to="/collections/birth-day">BIRTH DAY</NavLink></li>
          <li><NavLink to="/collections/house-warming">HOUSE WARMING</NavLink></li>
          <li><NavLink to="/collections/custom">CUSTOM</NavLink></li>
          </ul>
      </nav>
    </div>
  )
}
