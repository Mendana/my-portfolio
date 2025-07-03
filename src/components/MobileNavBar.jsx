import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import ThemeSwitch from './ThemeSwitch';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark } = useTheme();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobile-nav-container">
            <section className={`mobile-nav flex justify-between justify-self-center rounded-full
                ${isDark ? 'bg-[var(--dark-bg-primary)] border-[var(--dark-border-primary)]' : 
                'bg-white border-[var(--border-primary)]'}`}>
                <h3 className={`text-xl ${isDark ? 'text-[var(--dark-text-primary)]' : 
                    'text-[var(--text-primary)]'}`}>
                    MENU
                </h3>
                <button onClick={handleClick}>
                    {isOpen ? 
                        <IoClose size={16} className={isDark ? 'text-[var(--dark-text-primary)]' : 
                            'text-[var(--text-primary)]'} /> : 
                        <IoMenu size={16} className={isDark ? 'text-[var(--dark-text-primary)]' : 
                            'text-[var(--text-primary)]'} />
                    }
                </button>
            </section>

            {/* Menú desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden' }}
                        transition={{ duration: 0.3 }}
                        className={`mobile-nav-menu mt-8
                            ${isDark ? 'bg-[var(--dark-bg-primary)] border-[var(--dark-border-primary)]' : 
                            'bg-white border-[var(--border-primary)]'}`}
                    >
                        <ul>
                            <li>
                                <a href="#work" className={`${isDark ? 
                                    'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                                    'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'} 
                                    transition-colors`}>
                                    WORK
                                </a>
                            </li>
                            <li>
                                <a href="#education" className={`${isDark ? 
                                    'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                                    'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'} 
                                    transition-colors`}>
                                    EDUCATION
                                </a>
                            </li>
                            <li>
                                <a href="#about" className={`${isDark ? 
                                    'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                                    'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'} 
                                    transition-colors`}>
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className={`${isDark ? 
                                    'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                                    'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'} 
                                    transition-colors`}>
                                    CONTACT
                                </a>
                            </li>
                            <li>
                                <div className="theme-container flex justify-between items-center">
                                    <h4 className={isDark ? 'text-[var(--dark-text-primary)]' : 
                                        'text-[var(--text-primary)]'}>
                                        Theme
                                    </h4>
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