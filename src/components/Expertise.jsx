function Expertise() {
    return (
        <div className="flex flex-col gap-15 lg:flex-row lg:gap-20 ">
            <article>
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl'>EXPERTISE</h2>
                <p className="main-text">
                My technical expertise spans modern web technologies and artificial intelligence, with a focus on creating scalable, performant solutions.</p>
            </article>
            <div className="grid-expertise">
                <div className="expertise-group">
                    <h3 className="expertise-area">Frontend</h3>
                    <ul className="list-expertise-items">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Backend</h3>
                    <ul className="list-expertise-items">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Databases</h3>
                    <ul className="list-expertise-items">
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Expertise;