function AboutMe() {

    return (
        <div className="about-me-container">
            <article>
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl'>ABOUT</h2>
                <p className='main-text mb-8'>I'm a developer who believes in the intersection of technology and human experience. My journey began with curiosity about how digital systems work and has evolved into expertise in both traditional web development and cutting-edge AI technologies.</p>

                <p className='main-text mb-8'>Currently focused on projects that push the boundaries of what's possible with modern web technologies, particularly in the realm of artificial intelligence and machine learning integration. </p>

                <p className='main-text mb-8'>When not coding, I contribute to open-source projects, write technical articles, and explore the latest developments in AI research.</p>
            </article>
            <article>
                <ul className="list-about">
                    <li className="about-item">SERVICES</li>
                    <ul className="list-about-item">
                        <li>Web Development</li>
                        <li>AI Integration</li>
                        <li>Machine Learning Solutions</li>
                    </ul>
                    <li className="about-item">RECOGNITION</li>
                    <ul className="list-about-item">
                        <li>Featured in TechCrunch for innovative AI project</li>
                        <li>Speaker at local tech meetups on AI and web development</li>
                    </ul>
                </ul>
            </article>
        </div>
    );
}

export default AboutMe;