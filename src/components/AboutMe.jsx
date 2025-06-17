function AboutMe() {

    return (
        <div className="about-me-container">
            <article>
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl dark:text-white'>ABOUT</h2>
                <p className='main-text mb-8'>
                    I'm a self-taught developer passionate about creating digital experiences that blend functionality, design, and advanced technology. My journey started with a deep curiosity for how web applications work under the hood.
                </p>

                <p className='main-text mb-8'>
                    Over time, I've focused on front-end development with React and explored how artificial intelligence can enhance user interaction and solve real problems.
                </p>

                <p className='main-text mb-8'>
                    I'm currently focused on growing as a full-stack developer while experimenting with AI models, automation, and emerging technologies. I would like to start contributing to open-source projects while sharing what I've learn and staying curious.
                </p>

            </article>
            <article>
                <ul className="list-about">
                    <li className="about-item">SERVICES</li>
                    <ul className="list-about-item">
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Basic Data Analysis</li>
                    </ul>
                    <li className="about-item">RECOGNITION</li>
                    <ul className="list-about-item">
                        <li>60+ Platzi courses completed</li>
                        <li>Studying maths and software at Oviedo</li>
                    </ul>
                </ul>
            </article>
        </div>
    );
}

export default AboutMe;