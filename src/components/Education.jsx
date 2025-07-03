import { useState } from "react";
import FormalEducationItem from "./FormalEducationItem";
import formalEducation from "../data/formalEducation.json";
import certifications from "../data/certifications.json";
import { FaBookOpen } from "react-icons/fa6";
import CourseView from "./CourseView";
import CoursesModal from "./CoursesModal";

function Education() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getNumCourses = () => {
        return certifications.certifications.length;
    }

    const getLatestsCourses = () => {
        const sortedCourses = certifications.certifications.sort((a, b) => new Date(b.date) - new Date(a.date));

        return sortedCourses.slice(0, 3)
    }
    
    return (
        <div>
            <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>EDUCATION</h2>
            <p className="main-text">Continuos learning through formal education at university and self-study with online courses and books.</p>
            <section className="mt-16">
                <h3 className="text-4xl font-semibold lg:text-5xl text-[var(--text-primary)] md:mb-16">FORMAL EDUCATION</h3>
                <div className="mt-8">
                    {formalEducation.education.map((item, index) => (
                        <FormalEducationItem
                            key={index}
                            title={item.title}
                            status={item.status}
                            institution={item.institution}
                            startYear={item.startYear}
                            endYear={item.endYear}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section className="mt-16">
                <div className="flex flex-col">
                    <div>
                        <h3 className="text-4xl font-semibold lg:text-5xl text-[var(--text-primary)] mt-8 md:mb-16">CERTIFICATIONS</h3>
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
                <div className="mt-8 flex flex-col gap-8">
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