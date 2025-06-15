function Expertise() {

    return (
        <>
            <article className="main-text mb-10">
                My technical expertise spans modern web technologies and artificial intelligence, with a focus on creating scalable, performant solutions.
            </article>
            <ul className="list-expertise">
                <li className="expertise-area">Frontend</li>
                <ul className="list-expertise-items">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>TypeScript</li>
                </ul>
                <li className="expertise-area">Backend</li>
                <ul className="list-expertise-items">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>Django</li>
                </ul>
                <li className="expertise-area">Databases</li>
                <ul className="list-expertise-items">
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                </ul>
            </ul>
        </>
    );
}

export default Expertise;