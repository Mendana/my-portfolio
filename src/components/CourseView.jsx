import { FaRegCalendarAlt } from "react-icons/fa";

function CourseView({
    title,
    institution,
    date,
    hours,
    area,
    aptitudes,
}) {
    return (
        <div className="course-item p-6 border-1 border-[var(--border-secondary)] rounded-xl">
            <section className="course-item__heading">
                <span className="course-item__area">{area}</span>
                <div className="course-item__date">
                    <FaRegCalendarAlt size={12}/>
                    <p>{date}</p>
                </div>
            </section>
            <section className="course-item__info">
                <h5>{title}</h5>
                <p>{institution} • {hours}h</p>
                <div className="course-item__aptitudes">
                    {aptitudes.map((aptitude, index) => (
                        <span key={index} className="course-item__aptitude">
                            {aptitude}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CourseView;