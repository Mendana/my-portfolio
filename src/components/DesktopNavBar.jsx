import ThemeSwitch from './ThemeSwitch';
import { useTheme } from '../context/ThemeContext';

function DesktopNavBar() {
    const { isDark } = useTheme();
    
    return (
        <nav className="desktop-nav-container">
            <ul className={`desktop-nav flex items-center gap-8 py-4 px-6 rounded-full border 
                ${isDark ? 'border-[var(--dark-border-primary)] bg-[var(--dark-bg-primary)]/95' : 
                'border-[var(--border-primary)] bg-white/95'}`}>
                <li>
                    <a href="#work" 
                        className={`md:text-xl lg:text-2xl transition-colors ${isDark ? 
                            'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                            'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'}`}>
                        WORK
                    </a>
                </li>
                <li>
                    <a 
                        href="#about"
                        className={`md:text-xl lg:text-2xl transition-colors ${isDark ? 
                            'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                            'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'}`}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact"
                        className={`md:text-xl lg:text-2xl transition-colors ${isDark ? 
                            'text-[var(--dark-text-primary)] hover:text-[var(--dark-text-tertiary)]' : 
                            'text-[var(--text-primary)] hover:text-[var(--text-tertiary)]'}`}>
                        CONTACT
                    </a>
                </li>
                <li className="ml-4">
                    <ThemeSwitch />
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNavBar;