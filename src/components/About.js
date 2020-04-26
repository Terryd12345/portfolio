import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faWordpress, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const About = () => (  
    <div id="about" className="about">
        <div className="about__content">
            <h2>About</h2>
            <div className="about__details">
                <div className="about__details--paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque! Consequuntur totam rem ut error ab. Ad commodi quod culpa harum minima. Placeat, totam officiis non suscipit neque sint molestias, vero natus aperiam vitae quaerat iste possimus dicta vel nobis soluta praesentium voluptas aliquam culpa asperiores? Optio ipsam cupiditate impedit!</p>
                </div>
                <div className="about__details--logos">
                    <FontAwesomeIcon icon={ faJs } />
                    <FontAwesomeIcon icon={ faHtml5 } />
                    <FontAwesomeIcon icon={ faCss3Alt } />
                    <FontAwesomeIcon icon={ faWordpress } />
                    <FontAwesomeIcon icon={ faReact } />
                    <FontAwesomeIcon icon={ faSass } />
                </div>
            </div>
            
        </div>
    </div>
)

export default About;