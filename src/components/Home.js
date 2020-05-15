import React from 'react'
import profileImg from '../styles/images/homepage-svg.svg';

const Home = () => {
    
    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1 className="home__content--title">
                    Your Friendly Neighbourhood <strike>Spiderman</strike> Web Developer
                </h1>
                <div className="home__content__cta">
                    <a href="#contact" className="home__content__cta--chat">
                        Let's Chat
                    </a>
                    <a href="#services" className="home__content__cta--services">
                        My Services
                    </a>
                </div>     
            </div>
            <img className="home__img" src={profileImg} alt="homepage svg"/>
        </section>
    )
}

export default Home;