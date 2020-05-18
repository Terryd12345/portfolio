import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faShopify } from '@fortawesome/free-brands-svg-icons'
import { faExclamationTriangle, faTv } from '@fortawesome/free-solid-svg-icons'

const Services = () => (  
    <section id="services" className="services">
        <div className="services__content">
            <div className="services__header">
                <div>
                    <h2 className="services__header--title section-header">
                        Services
                    </h2>
                </div>   
                <p className="services__header--description">
                    I am primarily a web developer with experience developing custom web applications from scratch. I also have worked within the WordPress ecosystem as well as the Shopify ecosystem and am able to provide custom solutions for both platforms.
                </p>
                <a href="#contact" className="services__header--quote">
                    Get a Quote
                </a>
            </div>
            <div className="services__services">
                <div className="services__services--item">
                    <FontAwesomeIcon icon={faTv} />
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML &amp; CSS</li>
                        <li>Sass</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faWordpress} />
                    <h3>Wordpress</h3>
                    <ul>
                        <li>Theme Customization</li>
                        <li>Plugin Development</li>
                        <li>Security</li>
                        <li>SEO</li>
                    </ul>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faShopify} />
                    <h3>Shopify</h3>
                    <ul>
                        <li>Store Setup</li>
                        <li>Liquid Development</li>
                        <li>App Development</li>
                        <li>Theme Customization</li>
                    </ul>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                    <h3>Trouble Shooting</h3>
                    <ul>
                        <li>Fixing Bugs</li>
                        <li>Uncovering Problems</li>
                        <li>Securing Sites</li>
                        <li>Consultations</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default Services;
