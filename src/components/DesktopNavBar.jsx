import ThemeSwitch from './ThemeSwitch';

function DesktopNavBar() {
    return (
        <nav className="desktop-nav-container">
            <ul className="desktop-nav flex items-center gap-4 py-4 px-6 rounded-full border border-[var(--border-primary)] bg-white/95">
                <li>
                    <a 
                        href="#work" 
                        className="hover:text-[var(--text-tertiary)] transition-colors pr-4"
                    >
                        WORK
                    </a>
                </li>
                <li>
                    <a 
                        href="#about"
                        className="hover:text-[var(--text-tertiary)] transition-colors pr-4"
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact"
                        className="hover:text-[var(--text-tertiary)] transition-colors"
                    >
                        CONTACT
                    </a>
                </li>
                <li className="ml-4 border-l border-[var(--border-secondary)] pl-8">
                    <ThemeSwitch />
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNavBar;