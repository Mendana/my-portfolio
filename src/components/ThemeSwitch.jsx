import { useState } from 'react';
import { BsSun, BsMoon } from "react-icons/bs";

function ThemeSwitch() {
    const [isDark, setIsDark] = useState(false);

    const handleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <button 
            onClick={handleTheme}
            className={`w-18 h-9 rounded-full px-1.5 transition-colors duration-300 ease-in-out ${
                isDark ? 'bg-[var(--dark-border-secondary)]' : 'bg-[var(--border-primary)]'
            }`}
        >
            <div className={`w-6 h-6 rounded-full  flex items-center justify-center transform transition-all duration-500 ease-in-out ${
                isDark ? 'translate-x-8 rotate-[360deg] bg-[var(--dark-border-primary)]' : 'bg-white translate-x-0 rotate-0'
            }`}>
                {isDark ? 
                    <BsMoon className="text-[var(--dark-border-secondary)] transition-opacity duration-150" size={10} /> : 
                    <BsSun className="text-[#ebb714] transition-opacity duration-150" size={10} />
                }
            </div>
        </button>
    )
}

export default ThemeSwitch