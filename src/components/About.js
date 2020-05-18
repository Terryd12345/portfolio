import React from "react";
import ProfileImg from '../styles/images/profile.jpg';
import Plants from '../styles/images/Scene-Plants.svg';

const About = () => (  
    <section id="about" className="about">
        <div className="about--title">
            <h2 className="section-header">About</h2>
        </div>
       <p className="about--description">
           I first began developing software in 2016 as an undergraduate studying Chemical Engineering. I quickly fell in love with programming and changed my major to Computer Science. I completed my Bachelors of Science (Computing and Software Systems) from the University of Melbourne in early 2020. During my degree I worked as a research assistant developing software for the Department of Chemical Engineering. I was also an active member of the University of Melbourne Information Security Club, helping to run weekly events and educate other students about Information Security. Since graduating my focus has turned to web development as I see it as a point of convergence for so many other areas of technology.
       </p>
       <img className="about--img" src={ProfileImg} alt=""/>
       <img className="about--plants-img" src={Plants} alt="plants"/>
    </section>
)

export default About;