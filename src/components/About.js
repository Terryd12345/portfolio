import React from "react";
import ProfileImg from '../styles/images/profile.jpg';
import Plants from '../styles/images/Scene-Plants.svg';

const About = () => (  
    <section id="about" className="about">
        <div className="about--title">
            <h2 className="section-header">About</h2>
        </div>
       <p className="about--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt magnam laboriosam, enim omnis itaque labore exercitationem blanditiis molestiae beatae error esse asperiores facilis doloremque fugit laborum? Consequuntur, aspernatur ab.</p>
       <img className="about--img" src={ProfileImg} alt=""/>
       <img className="about--plants-img" src={Plants} alt="plants"/>
    </section>
)

export default About;