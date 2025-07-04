import { MdOutlinePlace } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion"; // Importa motion para animaciones internas

function FormalExperienceItem({
    title,
    jobType,
    workingDay,
    company,
    startDate,
    endDate,
    description,
    keyAchievements,
    technologies,
    location,
}) {
    const getTotalDuration = (start, end) => {
        // Parsear fechas en formato "jun. 2020" o "MM-YYYY"
        const parseCustomDate = (dateStr) => {
            if (dateStr === "present") {
                return new Date();
            }

            if (/^\d{2}-\d{4}$/.test(dateStr)) {
                const [month, year] = dateStr.split("-");
                return new Date(parseInt(year), parseInt(month) - 1, 1);
            }
            
            if (typeof dateStr === 'string') {
                const parts = dateStr.replace('.', '').split(' ');
                if (parts.length === 2) {
                    const monthMap = {
                        'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
                        'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
                    };
                    const month = monthMap[parts[0].toLowerCase()];
                    const year = parseInt(parts[1]);
                    
                    if (!isNaN(month) && !isNaN(year)) {
                        return new Date(year, month, 1);
                    }
                }
            }

            const date = new Date(dateStr);
            return isNaN(date.getTime()) ? new Date() : date;
        };
        
        const startDate = parseCustomDate(start);
        const endDate = parseCustomDate(end);
        
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.error("Fechas inválidas:", start, end);
            return "Duración desconocida";
        }
        
        // Cálculo contando meses extremos como completos
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth() + 1; // +1 para incluir el mes actual
        
        // Ajustar si el mes final es menor que el inicial
        if (months <= 0) {
            years--;
            months += 12;
        }
        
        // Eliminamos la comprobación de días ya que queremos contar los meses extremos completos
        
        // Formatear el resultado
        if (years === 0) {
            return `${months} ${months === 1 ? "month" : "months"}`;
        } else if (months === 0) {
            return `${years} ${years === 1 ? "year" : "years"}`;
        } else {
            return `${years} ${years === 1 ? "year" : "years"} ${months} ${months === 1 ? "month" : "months"}`;
        }
    };

    const getColorForJobType = (type) => {
        switch (type) {
            case "Freelance":
                return "bg-[var(--success-bg)] text-[var(--success)]";
            case "Company":
                return "bg-[var(--warning-bg)] text-[var(--warning)]";
            case "Internship":
                return "bg-[var(--error-bg)] text-[var(--error)]";
            default:
                return "bg-[var(--error-bg)] text-[var(--error)]";
        }
    }

    const getColorForWorkingDay = (time) => {
        switch (time) {
            case "Full-time":
                return "bg-[var(--success-bg)] text-[var(--success)]";
            case "Part-time":
                return "bg-[var(--warning-bg)] text-[var(--warning)]";
            default:
                return "bg-[var(--error-bg)] text-[var(--error)]";
        }
    }

    return (
        <div className="experience-item flex flex-col gap-4">
            <section className="experience-item__leading flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="experience-item__basics">
                    <motion.div 
                        className="flex flex-row gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className={`experience-item__job-label ${getColorForJobType(jobType)}`}>{jobType}</span>
                        <span className={`experience-item__job-label ${getColorForWorkingDay(workingDay)}`}>{workingDay}</span>
                    </motion.div>
                    <motion.h4 
                        className="experience-item__title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        {title}
                    </motion.h4>
                    <motion.h6 
                        className="experience-item__company"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        {company}
                    </motion.h6>
                </div>
                <motion.div 
                    className="experience-item__dates"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="experience-item__info-container">
                        <MdOutlinePlace size={16} />
                        <span className="experience-item__info-text">{location}</span>
                    </div>
                    <div className="experience-item__info-container">
                        <FaRegCalendarAlt size={16} />
                        <span className="experience-item__info-text">
                            {startDate} - {endDate}
                        </span>
                    </div>
                    <div className="experience-item__info-container">
                        <FaRegClock size={16} />
                        <span className="experience-item__info-text">
                            {getTotalDuration(startDate, endDate)}
                        </span>
                    </div>
                </motion.div>
            </section>
            <motion.section 
                className="experience-item__description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p>{description}</p>
                {keyAchievements.length > 0 && <span className="experience-item__achievements-title">Key Achievements</span>}
                <ul>
                    {keyAchievements.map((achievement, index) => (
                        <motion.li 
                            key={index} 
                            className="experience-item__achievement"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                        >
                            {achievement}
                        </motion.li>
                    ))}
                </ul>
                <motion.div 
                    className="experience-item__technologies"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    {technologies.map((tech, index) => (
                        <motion.span 
                            key={index} 
                            className="experience-item__technology"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.7 + (index * 0.05) }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}

export default FormalExperienceItem;