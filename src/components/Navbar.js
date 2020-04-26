import React from "react"

const Navbar = () => {

  const pages = ['home', 'about', 'projects', 'contact'];

  const handleNavigation = (page) => {
    pages.forEach(e => {
      if( e !== page ){
        let hidePage = document.getElementById(e);
        hidePage.style.visibility = 'hidden';
      } 
    });
    let showPage = document.getElementById(page);
    showPage.style.visibility = 'visible';

    let splashnav = document.getElementById('splashnav');
    splashnav.classList.toggle('splashnav');
    
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div 
          onClick={() => handleNavigation('home')}
        >
          <h1>Terence Denning</h1>
        </div>
      </div>
      <div className="navbar__nav">
      <div 
        onClick={() => handleNavigation('about')}
      >about</div>
        <div 
          onClick={() => handleNavigation('projects')}
        >projects</div>
        <div 
          onClick={() => handleNavigation('contact')}
        >contact</div>
      </div>
    </div>
  )
}

export default Navbar
