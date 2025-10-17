import { useState, useEffect, lazy, Suspense } from "react";
import FormalEducationItem from "./FormalEducationItem";
import formalEducation from "../data/formalEducation.json";
import certifications from "../data/certifications.json";
import recognitions from "../data/recognitions.json";
import { FaBookOpen } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import CourseView from "./CourseView";
import useWindowSize from "../hooks/useWindowSize";
import AnimateOnScroll from './AnimateOnScroll';
import LoadingSpinner from './LoadingSpinner';

// Importación dinámica
const CoursesModal = lazy(() => import('./CoursesModal'));
const RecognitionsModal = lazy(() => import('./RecognitionsModal'));

function Education() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRecognitionsModalOpen, setIsRecognitionsModalOpen] = useState(false);
    const [visibleCourses, setVisibleCourses] = useState(3);
    const [visibleRecognitions, setVisibleRecognitions] = useState(3);
    const windowSize = useWindowSize();
    
    // Determinar el número de cursos a mostrar basado en el ancho de pantalla
    useEffect(() => {
        if (windowSize.width >= 640 && windowSize.width < 1024) {
            setVisibleCourses(4);
            setVisibleRecognitions(4);
        } else {
            setVisibleCourses(3);
            setVisibleRecognitions(3);
        }
    }, [windowSize.width]);

    const getNumCourses = () => {
        return certifications.certifications.length;
    }

    const getLatestsCourses = () => {
        const sortedCourses = certifications.certifications.sort((a, b) => new Date(b.date) - new Date(a.date));
        return sortedCourses.slice(0, visibleCourses);
    }

    const getNumRecognitions = () => {
        return recognitions.length;
    }

    const getLatestsRecognitions = () => {
        const sortedRecognitions = [...recognitions].sort((a, b) => new Date(b.date) - new Date(a.date));
        return sortedRecognitions.slice(0, visibleRecognitions);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
    }

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
    }
    
    return (
        <div>
            <AnimateOnScroll direction="fromLeft">
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>EDUCATION</h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll direction="fromRight" delay={0.2}>
                <p className="main-text">Continuous learning through formal education at university and self-study with online courses and books.</p>
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
                        <p className="mt-4 mb-4 text-[var(--text-tertiary)] text-[1.4rem]">{getNumCourses()} completed courses • Latest:</p>
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

            <section className="mt-16">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <h3 className="text-4xl font-semibold text-[var(--text-primary)] mt-8">RECOGNITIONS</h3>
                        <p className="mt-4 mb-4 text-[var(--text-tertiary)] text-[1.4rem]">{getNumRecognitions()} recognitions • Latest:</p>
                    </div>
                    <div>
                        <button 
                            className="education__all-courses-btn"
                            onClick={() => setIsRecognitionsModalOpen(true)}
                        >
                            <FaAward size={16}/>View All Recognitions
                        </button>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getLatestsRecognitions().map((recognition, index) => (
                        <AnimateOnScroll key={recognition.id} delay={0.1 * index}>
                            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wide">
                                        {getTypeLabel(recognition.type)}
                                    </span>
                                </div>
                                
                                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                    {recognition.title}
                                </h4>
                                
                                <p className="text-[var(--text-secondary)] font-medium mb-2">
                                    {recognition.organization}
                                </p>
                                
                                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-3">
                                    <span>{formatDate(recognition.date)}</span>
                                    {recognition.location && (
                                        <>
                                            <span>•</span>
                                            <span>{recognition.location}</span>
                                        </>
                                    )}
                                </div>
                                
                                <p className="text-[var(--text-secondary)] text-sm line-clamp-3 mb-3">
                                    {recognition.description}
                                </p>
                                
                                {recognition.certificate && (
                                    <a
                                        href={recognition.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[var(--accent-color)] hover:underline text-sm font-medium"
                                    >
                                        View certificate →
                                    </a>
                                )}
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* Modal para todos los cursos */}
            <Suspense fallback={<LoadingSpinner />}>
                <CoursesModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                />
            </Suspense>

            {/* Modal para todos los reconocimientos */}
            <Suspense fallback={<LoadingSpinner />}>
                <RecognitionsModal 
                    isOpen={isRecognitionsModalOpen} 
                    onClose={() => setIsRecognitionsModalOpen(false)}
                    recognitions={recognitions}
                />
            </Suspense>
        </div>
    );
}

export default Education;