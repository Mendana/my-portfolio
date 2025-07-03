import FormalEducationItem from "./FormalEducationItem";
import formalEducation from "../data/formalEducation.json";

function Education() {
    return (
        <div>
            <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>EDUCATION</h2>
            <p className="main-text">Continuos learning through formal education at university and self-study with online courses and books.</p>
            <section className="mt-16">
                <h3 className="text-4xl font-semibold lg:text-5xl text-[var(--text-primary)]">FORMAL EDUCATION</h3>
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
        </div>
    );
}

export default Education;