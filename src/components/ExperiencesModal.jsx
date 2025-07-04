import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import formalExperience from "../data/formalExperience.json";
import FormalExperienceItem from "./FormalExperienceItem";

function ExperiencesModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const [experiences, setExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const jobTypes = ["All", ...new Set(formalExperience.experiences.map(exp => exp.jobType))];

  useEffect(() => {
    let filteredExperiences = formalExperience.experiences;
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredExperiences = filteredExperiences.filter(exp => 
        exp.title.toLowerCase().includes(searchTermLower) ||
        exp.company.toLowerCase().includes(searchTermLower) ||
        (exp.technologies && Array.isArray(exp.technologies) && 
          exp.technologies.some(tech => 
            tech.toLowerCase().includes(searchTermLower)
          )
        ) ||
        exp.description.toLowerCase().includes(searchTermLower) ||
        exp.location.toLowerCase().includes(searchTermLower)
      );
    }
    
    if (selectedType !== "All") {
      filteredExperiences = filteredExperiences.filter(exp => 
        exp.jobType === selectedType
      );
    }

    filteredExperiences = filteredExperiences.sort((a, b) => {
      const getDateValue = (dateStr) => {
        if (dateStr === "present") return new Date();
        
        if (/^\d{2}-\d{4}$/.test(dateStr)) {
          const [month, year] = dateStr.split("-");
          return new Date(parseInt(year), parseInt(month) - 1);
        }
        
        return new Date(dateStr);
      };
      
      return getDateValue(b.endDate) - getDateValue(a.endDate);
    });
    
    setExperiences(filteredExperiences);
  }, [searchTerm, selectedType]);

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
              <h2 className="text-3xl font-bold">All Experiences</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Cerrar modal"
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
                  placeholder="Search experiences, companies, or technologies..."
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
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "All" ? "All Job Types" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Experiences List - Simples, sin borde ni punto */}
            <div className="mt-6 flex flex-col gap-8">
              {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="experience-modal-item p-4 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <FormalExperienceItem
                      title={exp.title}
                      jobType={exp.jobType}
                      workingDay={exp.workingDay}
                      company={exp.company}
                      startDate={exp.startDate}
                      endDate={exp.endDate}
                      description={exp.description}
                      keyAchievements={exp.keyAchievements}
                      technologies={exp.technologies}
                      location={exp.location}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="text-center py-8 text-[1.4rem] text-gray-500">
                  No experiences found matching your criteria.
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ExperiencesModal;