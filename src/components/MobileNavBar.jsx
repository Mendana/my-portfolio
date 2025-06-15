import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import ThemeSwitch from './ThemeSwitch';
import { motion, AnimatePresence } from "framer-motion";

function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobile-nav-container">
            <section className="mobile-nav flex justify-between justify-self-center rounded-full">
                <h3 className="text-xl">MENU</h3>
                <button onClick={handleClick}>
                    {isOpen ? <IoClose size={16} /> : <IoMenu size={16} />}
                </button>
            </section>

            {/* Menú desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mobile-nav-menu mt-8 justify-self-center">
                        <ul>
                            <li>
                                <a href="#work">WORK</a>
                            </li>
                            <li>
                                <a href="#about">ABOUT</a>
                            </li>
                            <li>
                                <a href="#contact">CONTACT</a>
                            </li>
                            <li>
                                <div className="theme-container flex justify-between items-center">
                                    <h4>Theme</h4>
                                    <ThemeSwitch />
                                </div>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNavBar;