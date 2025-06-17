import { CiMail } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function MyFooter() {
    const handleDownloadCV = () => {
        const cvUrl = '/pdf/Diego-Díaz-Mendaña-CV-Completo.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV-DiegoDiazMendana.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="footer-container">
            <section className="footer-upper-section">
                <article>
                    <h2 className="text-5xl font-bold leading-15 pb-8 md:text-6xl lg:text-7xl lg:leading-23">
                        LET'S WORK <br /> TOGETHER
                    </h2>
                    <p className="main-text">
                        Ready to bring your ideas to life? I'm available for new projects and collaborations
                    </p>
                    <div className="button-container">
                        <a 
                            href="mailto:diegodiazmenda@gmail.com?subject=Portfolio Contact&body=Hi Diego," 
                            className="get-in-touch-link flex items-center gap-2"
                        >
                            <CiMail className="text-black" size={16}/> 
                            GET IN TOUCH
                        </a>
                        <button 
                            onClick={handleDownloadCV}
                            className="button flex items-center gap-2"
                        >
                            <IoDownloadOutline />
                            DOWNLOAD CV
                        </button>
                    </div>
                </article>
                <article className="footer-links">
                    <ul className="list-footer">
                        <li className="footer-item">CONNECT</li>
                        <ul className="list-footer-item">
                            <li>
                                <a href="https://github.com/Mendana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <LuGithub /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/diego-d%C3%ADaz-menda%C3%B1a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <LuLinkedin /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:diegodiazmenda@gmail.com" className="flex items-center gap-2">
                                    <MdOutlineEmail /> Email
                                </a>
                            </li>
                        </ul>
                        <li className="footer-item">AVAILABILITY</li>
                        <ul className="list-footer-item">
                            <li>Currently accepting new projects and collaborations</li>
                            <li>Response time: 24-48 hours</li>
                        </ul>
                    </ul>
                </article>
            </section>
            <section className="footer-lower-section md:mt-18">
                <article>
                    <p className="text-large text-[var(--dark-text-tertiary)] font-light md:text-xl">
                        © 2025 Diego Díaz Mendaña. All rights reserved.
                    </p>
                    <p className="text-large text-[var(--dark-text-tertiary)] font-light md:text-xl">
                        Crafted with care and a passion for technology.
                    </p>
                </article>
            </section>
        </div>
    );
}

export default MyFooter;