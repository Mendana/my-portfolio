import { useState, useEffect } from "react";
import FormalEducationItem from "./FormalEducationItem";
import formalEducation from "../data/formalEducation.json";
import certifications from "../data/certifications.json";
import { FaBookOpen } from "react-icons/fa6";
import CourseView from "./CourseView";
import CoursesModal from "./CoursesModal";
import useWindowSize from "../hooks/useWindowSize";
import AnimateOnScroll from './AnimateOnScroll';

function Education() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visibleCourses, setVisibleCourses] = useState(3);
    const windowSize = useWindowSize();
    
    // Determinar el número de cursos a mostrar basado en el ancho de pantalla
    useEffect(() => {
        if (windowSize.width >= 640 && windowSize.width < 1024) {
            setVisibleCourses(4);
        } else {
            setVisibleCourses(3);
        }
    }, [windowSize.width]);

    const getNumCourses = () => {
        return certifications.certifications.length;
    }

    const getLatestsCourses = () => {
        const sortedCourses = certifications.certifications.sort((a, b) => new Date(b.date) - new Date(a.date));
        return sortedCourses.slice(0, visibleCourses);
    }
    
    return (
        <div>
            <AnimateOnScroll direction="fromLeft">
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>EDUCATION</h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll direction="fromRight" delay={0.2}>
                <p className="main-text">Continuos learning through formal education at university and self-study with online courses and books.</p>
            </AnimateOnScroll>
            
            <section className="mt-16">
                <AnimateOnScroll direction="fromLeft" delay={0.3}>
                    <h3 className="text-4xl font-semibold text-[var(--text-primary)] md:mb-16">FORMAL EDUCATION</h3>
                </AnimateOnScroll>
                
                <div className="mt-8">
                    {formalEducation.education.map((item, index) => (
                        <AnimateOnScroll 
                            key={index} 
                            direction="fromBottom" 
                            delay={0.1 * index}
                        >
                            <FormalEducationItem
                                title={item.title}
                                status={item.status}
                                institution={item.institution}
                                startYear={item.startYear}
                                endYear={item.endYear}
                                description={item.description}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>
            <section className="mt-16">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <h3 className="text-4xl font-semibold text-[var(--text-primary)] mt-8">CERTIFICATIONS</h3>
                        <p className="mt-4 mb-4 text-[var(--text-tertiary)] text-[1.4rem]">{getNumCourses()} completed courses • Latests:</p>
                    </div>
                    <div>
                        <button 
                            className="education__all-courses-btn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <FaBookOpen size={16}/>View All Courses
                        </button>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getLatestsCourses().map((course, index) => (
                        <CourseView 
                            key={index}
                            title={course.title}
                            institution={course.institution}
                            date={course.date}
                            hours={course.hours}
                            area={course.area}
                            aptitudes={course.aptitudes}
                        />
                    ))}
                </div>
            </section>

            {/* Modal para todos los cursos */}
            <CoursesModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}

export default Education;