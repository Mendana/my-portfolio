import { MdWork } from "react-icons/md";
import formalExperience from "../data/formalExperience.json";
import FormalExperienceItem from "./FormalExperienceItem";
import { useState, lazy, Suspense } from "react";
import AnimateOnScroll from './AnimateOnScroll';
import LoadingSpinner from './LoadingSpinner';

// Importación dinámica
const ExperiencesModal = lazy(() => import('./ExperiencesModal'));

function Experience() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const getNumExperiences = () => {
        return formalExperience.experiences.length;
    };
    
    // Función para obtener las 3 experiencias más recientes
    const getLatestExperiences = () => {
        // Ordenar experiencias por fecha (más recientes primero)
        const sortExperiences = [...formalExperience.experiences].sort((a, b) => {
            // Convertir fechas a objetos Date para comparar
            const getDateValue = (dateStr) => {
                if (dateStr === "present") return new Date();
                
                // Formato MM-YYYY
                if (/^\d{2}-\d{4}$/.test(dateStr)) {
                    const [month, year] = dateStr.split("-");
                    return new Date(parseInt(year), parseInt(month) - 1);
                }
                
                return new Date(dateStr);
            };
            
            return getDateValue(b.endDate) - getDateValue(a.endDate);
        });
        
        // Devolver las 3 más recientes
        return sortExperiences.slice(0, 3);
    };

    return (
        <div>
            <AnimateOnScroll direction="fromLeft">
                <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>EXPERIENCE</h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll direction="fromRight" delay={0.2}>
                <p className="main-text">Professional journey through work, projects and learning experiences</p>
            </AnimateOnScroll>

            <section className="mt-16">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <AnimateOnScroll direction="fromLeft" delay={0.3}>
                        <div>
                            <h3 className="text-4xl font-semibold text-[var(--text-primary)] mt-8">PROFESSIONAL JOURNEY</h3>
                            <p className="mt-4 mb-4 text-[var(--text-tertiary)] text-[1.4rem]">{getNumExperiences()} experiences • Latest:</p>
                        </div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll direction="fromRight" delay={0.4}>
                        <div>
                            <button
                                className="education__all-courses-btn"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <MdWork size={16} />View All Experiences
                            </button>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="mt-8 flex flex-col gap-8">
                    {getLatestExperiences().map((item, index) => (
                        <AnimateOnScroll 
                            key={index} 
                            direction="fromBottom" 
                            delay={0.1 * index}
                        >
                            <div className="relative pl-[16px] border-l-2 pb-8 pt-2 border-[var(--text-primary)] md:pl-[32px] md:border-l-3">
                                <div className="absolute left-[-7px] top-[-2px] w-5 h-5 bg-[var(--text-primary)] rounded-full lg:left-[-7px] xl:left[-5px]" />
                                <FormalExperienceItem
                                    title={item.title}
                                    jobType={item.jobType}
                                    workingDay={item.workingDay}
                                    company={item.company}
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                    description={item.description}
                                    keyAchievements={item.keyAchievements}
                                    technologies={item.technologies}
                                    location={item.location}
                                />
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>
            
            {/* Modal para todas las experiencias - Con el spinner personalizado */}
            <Suspense fallback={<LoadingSpinner />}>
                <ExperiencesModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                />
            </Suspense>
        </div>
    );
}

export default Experience;