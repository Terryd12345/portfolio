import React from 'react'
import Particles from 'react-particles-js'

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
            <Particles 
              params={{
            		particles: {
                        number: {
                            value: 25,
                            density: {
                                enable: true,
                                value_area: 500
                            }
                        },
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#FF9B21",
            					blur: .5
            				}
            			}
            		}
            	}}
            />
        </section>
    )
}

export default Home;