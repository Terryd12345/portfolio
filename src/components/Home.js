import React from 'react'
import Navbar from './Navbar'
import Watermark from './Watermark';

const Home = () => {
    return (
        <div id="home" className="home">
            <Navbar />
            <Watermark />
            <div className="home__content">
                <h2>Software Developer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas optio nostrum explicabo commodi molestias modi perspiciatis fuga veniam illo provident.</p>
                <button>Let's Chat</button>
            </div>
        </div>
    )
}

export default Home;