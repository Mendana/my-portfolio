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

    return (
        <div className="project-view-container">
            <img src={image} alt="project image" />
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
                <div display="flex flex-row">
                    <p className="project-genre">{genre}</p>
                    <p>{year}</p>
                </div>
            </article>
        </div>
    )
}

export default ProjectView;