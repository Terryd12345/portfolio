import React from 'react'

const Home = () => {
    
    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1 className="home__content__header">
                    <span className="home__content__header--title">Software Developer</span>
                    <span className="home__content__header--subtitle">Melbourne, AU</span>
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
            
        </section>
    )
}

export default Home;