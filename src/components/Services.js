import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faShopify } from '@fortawesome/free-brands-svg-icons'
import { faExclamationTriangle, faTv } from '@fortawesome/free-solid-svg-icons'

const Services = () => (  
    <section id="services" className="services">
        <div className="services__content">
            <div className="services__header">
                <h2 className="services__header--title">
                    Services
                </h2>
                <p className="services__header--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus maiores corrupti? Accusamus nisi nulla est nobis quis temporibus necessitatibus, culpa veniam ab reprehenderit repudiandae tempore rerum consequuntur. Repellendus, illum.</p>
                <a href="#contact" className="services__header--quote">
                    Get a Quote
                </a>
            </div>
            <div className="services__services">
                <div className="services__services--item">
                    <FontAwesomeIcon icon={faTv} />
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odio architecto deserunt atque est, consectetur placeat reprehenderit aliquid dolore possimus illum eveniet maxime dolorum iste perferendis voluptatum ratione voluptates ad?</p>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faWordpress} />
                    <h3>Wordpress</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odio architecto deserunt atque est, consectetur placeat reprehenderit aliquid dolore possimus illum eveniet maxime dolorum iste perferendis voluptatum ratione voluptates ad?</p>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faShopify} />
                    <h3>Ecommerce</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odio architecto deserunt atque est, consectetur placeat reprehenderit aliquid dolore possimus illum eveniet maxime dolorum iste perferendis voluptatum ratione voluptates ad?</p>
                </div>
                <div className="services__services--item">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                    <h3>Trouble Shooting</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odio architecto deserunt atque est, consectetur placeat reprehenderit aliquid dolore possimus illum eveniet maxime dolorum iste perferendis voluptatum ratione voluptates ad?</p>
                </div>
            </div>
        </div>
    </section>
)

export default Services;
