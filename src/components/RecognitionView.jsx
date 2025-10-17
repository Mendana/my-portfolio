import { FaRegCalendarAlt } from "react-icons/fa";
import { HiLocationMarker, HiPresentationChartLine, HiHeart } from "react-icons/hi";
import { HiTrophy } from "react-icons/hi2";

function RecognitionView({
    title,
    organization,
    date,
    type,
    location,
    description,
    certificate,
}) {
    const getTypeIcon = (type) => {
        switch (type) {
            case 'event':
                return <HiPresentationChartLine className="w-5 h-5" />;
            case 'award':
                return <HiTrophy className="w-5 h-5" />;
            case 'volunteer':
                return <HiHeart className="w-5 h-5" />;
            default:
                return <HiTrophy className="w-5 h-5" />;
        }
    };

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
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'event':
                return 'recognition-item--event';
            case 'award':
                return 'recognition-item--award';
            case 'volunteer':
                return 'recognition-item--volunteer';
            default:
                return 'recognition-item--other';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    };

    return (
        <div className={`recognition-item p-6 rounded-xl ${getTypeColor(type)}`}>
            <section className="recognition-item__heading">
                <div className="recognition-item__type">
                    {getTypeIcon(type)}
                    <span>{getTypeLabel(type)}</span>
                </div>
                <div className="recognition-item__date">
                    <FaRegCalendarAlt size={12}/>
                    <p>{formatDate(date)}</p>
                </div>
            </section>
            <section className="recognition-item__info">
                <h5>{title}</h5>
                <p className="recognition-item__organization">{organization}</p>
                {location && (
                    <div className="recognition-item__location">
                        <HiLocationMarker size={14}/>
                        <span>{location}</span>
                    </div>
                )}
                <p className="recognition-item__description">{description}</p>
                {certificate && (
                    <a
                        href={certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="recognition-item__certificate"
                    >
                        View certificate →
                    </a>
                )}
            </section>
        </div>
    );
}

export default RecognitionView;