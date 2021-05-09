import React from 'react'
import Particles from 'react-particles-js'

const Home = () => {
    
    

    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1 className="home__content__header">
                    <span className="home__content__header--title">Software Developer</span>
                    <span className="home__content__header--subtitle">Sydney, AU</span>
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
           
                <Particles 
                params={{
                        particles: {
                            number: {
                                value: 5,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#FF9B21",
                                    blur: 1
                                }
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 3,
                                    color: '#FF9B21'
                                }
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 0,
                                    rotateY: 0
                                }
                            }
                        }
                    }}
                />
            )}
            
        </section>
    )
}

export default Home;