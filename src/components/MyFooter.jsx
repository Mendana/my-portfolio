import { CiMail } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";


function MyFooter() {

    return (
        <div className="footer-container">
            <section className="footer-upper-section">
                <article>
                    <h2 className="text-5xl font-bold leading-15 pb-8 md:text-6xl lg:text-7xl lg:leading-23">LET'S WORK <br /> TOGETHER</h2>
                    <p className="main-text">Ready to bring your ideas to life? I'm available for new projects and collaborations</p>
                    <div className="button-container">
                        <button><CiMail className="text-black" size={16}/> GET IN TOUCH</button>
                        <button><IoDownloadOutline />DOWNLOAD CV</button>
                    </div>
                </article>
                <article className="footer-links">
                    <ul className="list-footer">
                        <li className="footer-item">CONNECT</li>
                        <ul className="list-footer-item">
                            <li><LuGithub /> <a href="#">Github</a></li>
                            <li><LuLinkedin /> <a href="#">LinkedIn</a></li>
                            <li><MdOutlineEmail /> <a href="mailto:diegodiazmenda@gmail.com">Email</a></li>
                        </ul>
                        <li className="footer-item">AVAILABILITY</li>
                        <ul className="list-footer-item">
                            <li>Currently accepting new projects for Q2 2024</li>
                            <li>Response time: 24-48 hours</li>
                        </ul>
                    </ul>
                </article>
            </section>
            <section className="footer-lower-section md:mt-18">
                <article>
                    <p className="text-large text-[var(--dark-text-tertiary)] font-light md:text-xl">© 2024 Diego Díaz Menda. All rights reserved.</p>
                    <p className="text-large text-[var(--dark-text-tertiary)] font-light md:text-xl">Crafted with care and a passion for technology.</p>
                </article>
            </section>
        </div>
    );
}

export default MyFooter;