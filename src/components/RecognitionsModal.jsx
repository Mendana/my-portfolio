import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import RecognitionView from "./RecognitionView";

function RecognitionsModal({ isOpen, onClose, recognitions }) {
  const { isDark } = useTheme();
  const [filteredRecognitions, setFilteredRecognitions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Get unique types from recognitions
  const types = ["All", ...new Set(recognitions.map(recognition => recognition.type))];

  useEffect(() => {
    // Filter recognitions based on search term and selected type
    let filtered = recognitions;
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filtered = filtered.filter(recognition => 
        // Buscar en título
        recognition.title.toLowerCase().includes(searchTermLower) ||
        // Buscar en organización
        recognition.organization.toLowerCase().includes(searchTermLower) ||
        // Buscar en descripción
        recognition.description.toLowerCase().includes(searchTermLower) ||
        // Buscar en ubicación
        (recognition.location && recognition.location.toLowerCase().includes(searchTermLower))
      );
    }
    
    if (selectedType !== "All") {
      filtered = filtered.filter(recognition => 
        recognition.type === selectedType
      );
    }

    // Sort recognitions by date (newest first)
    filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setFilteredRecognitions(filtered);
  }, [searchTerm, selectedType, recognitions]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getTypeLabel = (type) => {
    switch (type) {
      case 'event':
        return 'Event';
      case 'award':
        return 'Award';
      case 'volunteer':
        return 'Volunteer';
      default:
        return 'Other';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[85vh] md:max-w-[1150px] overflow-y-auto rounded-xl z-[2001] p-6 shadow-2xl
              ${isDark ? 'bg-[var(--dark-bg-primary)] text-[var(--dark-text-primary)]' : 'bg-[var(--bg-primary)] text-[var(--text-primary)]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">All Recognitions</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <IoClose size={24} />
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center">
              {/* Search Input */}
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Search recognitions or organizations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`text-xl w-full p-3 pl-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${isDark 
                      ? 'bg-[var(--dark-bg-secondary)] border-[var(--dark-border-primary)] focus:ring-[var(--dark-text-tertiary)]' 
                      : 'bg-white border-[var(--border-primary)] focus:ring-[var(--text-tertiary)]'}`}
                />
              </div>
              
              {/* Type Filter */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={`text-xl w-full md:w-auto p-3 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${isDark 
                      ? 'bg-[var(--dark-bg-secondary)] border-[var(--dark-border-primary)] focus:ring-[var(--dark-text-tertiary)]' 
                      : 'bg-white border-[var(--border-primary)] focus:ring-[var(--text-tertiary)]'}`}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type === "All" ? "All Types" : getTypeLabel(type)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Recognitions List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecognitions.length > 0 ? (
                filteredRecognitions.map((recognition) => (
                  <RecognitionView
                    key={recognition.id}
                    title={recognition.title}
                    organization={recognition.organization}
                    date={recognition.date}
                    type={recognition.type}
                    location={recognition.location}
                    description={recognition.description}
                    certificate={recognition.certificate}
                  />
                ))
              ) : (
                <p className="text-center py-8 text-[1.4rem] text-gray-500 col-span-full">
                  No recognitions found matching your criteria.
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default RecognitionsModal;