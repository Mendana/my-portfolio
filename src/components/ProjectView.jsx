import { FaArrowRight } from "react-icons/fa6";

function ProjectView({
            id,
            title = '',
            description = '',
            status = 'down',
            image = '',
            technologies = [],
            year = '',
            genre = '',
            link = '#'
    }) {
    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'live':
                return 'status-live';
            case 'development':
                return 'status-development';
            case 'down':
                return 'status-down';
            default:
                return 'status-down';
        }
    };

    const handleProjectClick = () => {
        // Solo navegar si hay un enlace válido
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div 
            className="project-view-container" 
            onClick={handleProjectClick}
            role="button" 
            tabIndex={0}
            aria-label={`Ver proyecto ${title}`}
            onKeyDown={(e) => {
                // Permitir activación con tecla Enter para accesibilidad
                if (e.key === 'Enter') handleProjectClick();
            }}
        >
            <img src={image} alt={`Imagen del proyecto ${title}`} />
            <span className="project-status">
                <span className={`status-indicator ${getStatusColor(status)}`}></span>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <h4>{(id <= 9) ? '0' + id : id}</h4>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-arrow"
                onClick={(e) => e.stopPropagation()} // Evitar doble activación
            >
                <FaArrowRight size={18} />
            </a>
            <article>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className="flex flex-row items-center">
                    <p className="project-genre">{genre}</p>
                    <p>{year}</p>
                </div>
            </article>
        </div>
    )
}

export default ProjectView;