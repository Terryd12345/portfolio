import React from 'react'
import profileImg from '../styles/images/homepage-svg.svg';

const Home = () => {
    
    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1 className="home__content--title">
                    Website troubles? You're in the right place!
                </h1>
                <div className="home__content__cta">
                    <div className="home__content__cta--chat">
                        Let's Chat
                    </div>
                    <div className="home__content__cta--services">
                        My Services
                    </div>
                </div>     
            </div>
            <img className="home__img" src={profileImg} alt="homepage svg"/>
        </section>
    )
}

export default Home;