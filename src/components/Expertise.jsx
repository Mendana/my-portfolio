function Expertise() {
    return (
        <div className="flex flex-col gap-15 lg:flex-row lg:gap-20 ">
            <article className="lg:w-3/2">
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl dark:text-white'>EXPERTISE</h2>
                <p className="main-text mb-8">
                My technical skills currently encompass modern web technologies and the principles of data analysis. As a student, I am continuously expanding my knowledge by exploring different tools and branches of computer science that I am passionate about.</p>

                <p className="main-text mb-8">
                I am focused in frontend development with React and Tailwind CSS, creating attractive and functional user interfaces. On the backend, I use Python and Django to build robust and scalable applications. In addition, I have experience with databases such as Oracle SQL and SQLite, which allows me to manage data efficiently, and my technical skills currently encompass modern web technologies and the principles of data analysis. As a student myself, I am continuously expanding my knowledge by exploring different tools and branches of computer science that I am passionate about.
                </p>

                <p className="main-text">
                In the field of data analysis, I use libraries such as NumPy, Pandas, Matplotlib and Seaborn to extract valuable information from datasets. My approach is to always learn and adapt to new technologies and methodologies that allow me to improve my skills and contribute effectively to challenging projects.
                </p>
            </article>
            <div className="grid-expertise lg:pt-8">
                <div className="expertise-group">
                    <h3 className="expertise-area">Frontend</h3>
                    <ul className="list-expertise-items">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Backend</h3>
                    <ul className="list-expertise-items">
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Databases</h3>
                    <ul className="list-expertise-items">
                        <li>Oracle SQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Programming Languages</h3>
                    <ul className="list-expertise-items">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C/C++</li>
                    </ul>
                </div>
                <div className="expertise-group">
                    <h3 className="expertise-area">Data Analysis</h3>
                    <ul className="list-expertise-items">
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Expertise;