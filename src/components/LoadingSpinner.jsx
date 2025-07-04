import { useTheme } from '../context/ThemeContext';

function LoadingSpinner() {
  const { isDark } = useTheme();
  
  return (
    <div className="flex justify-center items-center p-8">
      <div 
        className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${
          isDark ? 'border-[var(--dark-text-primary)]' : 'border-[var(--text-primary)]'
        }`}
      ></div>
    </div>
  );
}

export default LoadingSpinner;