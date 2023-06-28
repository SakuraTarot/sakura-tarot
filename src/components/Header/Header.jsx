import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Stellar from '../../assets/Stellar Journey.svg';
import Start from '../../assets/favorite.svg';

export default function Header() {
  return (
    
    <nav className='navegation'>
        <Link to="/*" className='back-Intro'><img src={Stellar} alt='Logo'/></Link>
        <Link to="/favotites"><img src={Start} alt='star for favorites'/></Link> 
    </nav>    
 
  )
}
