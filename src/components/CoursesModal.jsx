import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../context/ThemeContext';
import certifications from "../data/certifications.json";
import CourseView from "./CourseView";

function CoursesModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");

  // Get unique areas from certifications
  const areas = ["All", ...new Set(certifications.certifications.map(course => course.area))];

  useEffect(() => {
    // Filter courses based on search term and selected area
    let filteredCourses = certifications.certifications;
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        // Buscar en título
        course.title.toLowerCase().includes(searchTermLower) ||
        // Buscar en institución
        course.institution.toLowerCase().includes(searchTermLower) ||
        // Buscar en aptitudes (si existe el array de aptitudes)
        (course.aptitudes && Array.isArray(course.aptitudes) && 
          course.aptitudes.some(aptitude => 
            aptitude.toLowerCase().includes(searchTermLower)
          )
        )
      );
    }
    
    if (selectedArea !== "All") {
      filteredCourses = filteredCourses.filter(course => 
        course.area === selectedArea
      );
    }

    // Sort courses by date (newest first)
    filteredCourses = filteredCourses.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setCourses(filteredCourses);
  }, [searchTerm, selectedArea]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Aumentado z-index a 2000 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
            onClick={onClose}
          />
          
          {/* Modal - Aumentado z-index a 2001 para estar por encima del backdrop */}
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
              <h2 className="text-3xl font-bold">All Certifications</h2>
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
                  placeholder="Search courses or institutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`text-xl w-full p-3 pl-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${isDark 
                      ? 'bg-[var(--dark-bg-secondary)] border-[var(--dark-border-primary)] focus:ring-[var(--dark-text-tertiary)]' 
                      : 'bg-white border-[var(--border-primary)] focus:ring-[var(--text-tertiary)]'}`}
                />
              </div>
              
              {/* Area Filter */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className={`text-xl w-full md:w-auto p-3 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${isDark 
                      ? 'bg-[var(--dark-bg-secondary)] border-[var(--dark-border-primary)] focus:ring-[var(--dark-text-tertiary)]' 
                      : 'bg-white border-[var(--border-primary)] focus:ring-[var(--text-tertiary)]'}`}
                >
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area === "All" ? "All Areas" : area}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Courses List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.length > 0 ? (
                courses.map((course, index) => (
                  <CourseView
                    key={index}
                    title={course.title}
                    institution={course.institution}
                    date={course.date}
                    hours={course.hours}
                    area={course.area}
                    aptitudes={course.aptitudes}
                  />
                ))
              ) : (
                <p className="text-center py-8 text-[1.4rem] text-gray-500 col-span-full">
                  No courses found matching your criteria.
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CoursesModal;