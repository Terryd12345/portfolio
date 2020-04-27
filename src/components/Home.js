import React, { useState } from 'react'

const Home = () => {
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
        <section id="home" className="home">
            <div className="home__content">
                <h2>Software Developer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas optio nostrum explicabo commodi molestias modi perspiciatis fuga veniam illo provident.</p>
                <button
                    onClick={() => handleNavigation('contact')}
                >Let's Chat</button>
            </div>
        </section>
    )
}

export default Home;