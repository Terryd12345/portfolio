import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faProjectDiagram, faPhone } from '@fortawesome/free-solid-svg-icons';


const MobileNav = () => {
  const pages = ['home', 'about', 'projects', 'contact'];
  const [pageChanging, setPageChanging] = useState(false);

  const handleNavigation = (page) => {
    if( !pageChanging ) {

      let splashnav = document.getElementById('splashnav');
      
      splashnav.classList.add('splashnav');

      setPageChanging(true);
      setTimeout(() => {
        pages.forEach(e => {
          if( e !== page ){
            let hidePage = document.getElementById(e);
            hidePage.style.visibility = 'hidden';
          } 
        });
        let showPage = document.getElementById(page);
        showPage.style.visibility = 'visible';
      }, 800);

      setTimeout(() => {
        splashnav.classList.remove('splashnav');
        setPageChanging(false);
      }, 1600);
      
    } 
  }

  return (
    <div className="mobilenav">
        <div 
            className="mobilenav__about"
            onClick={ () => handleNavigation('about') }
        >
            <FontAwesomeIcon icon={ faUserCircle } />
            <p>About</p>
        </div>
        <div 
            className="mobilenav__projects"
            onClick={ () => handleNavigation('projects') }
        >
            <FontAwesomeIcon icon={ faProjectDiagram } />
            <p>Projects</p>
        </div>
        <div 
            className="mobilenav__contact"
            onClick={ () => handleNavigation('contact') }
        >
            <FontAwesomeIcon icon={ faPhone } />
            <p>Contact</p>
        </div>
    </div>
  )
}

export default MobileNav;