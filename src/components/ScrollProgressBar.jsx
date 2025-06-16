import { useState, useEffect } from 'react';

function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollProgress = () => {
        const windowHeight = window.document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / windowHeight) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollProgress);
        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}

export default ScrollProgressBar;