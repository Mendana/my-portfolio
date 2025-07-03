function CourseView({
    title,
    status,
    institution,
    startYear,
    endYear,
    description
}) {
    const getStatusColor = (status) => {
        if (!status) return 'bg-[var(--text-secondary)]';
        switch (status.toLowerCase()) {
            case 'in progress':
                return 'bg-[var(--warning-bg)]';
            case 'completed':
                return 'bg-[var(--success-bg)]';
            case 'dropped':
                return 'bg-[var(--error-bg)]';
            default:
                return 'bg-[var(--text-secondary)]';
        }
    }

    const getTextColor = (status) => {
        if (!status) return 'text-[var(--text-secondary)]';
        switch (status.toLowerCase()) {
            case 'in progress':
                return 'text-[var(--warning)]';
            case 'completed':
                return 'text-[var(--success)]';
            case 'dropped':
                return 'text-[var(--error)]';
            default:
                return 'text-[var(--text-secondary)]';
        }
    }

    return (
        <div className="education-item pl-4 border-l-2 border-[var(--text-primary)] mb-8 md:pl-8">
            <section className="flex flex-col education-item__heading mb-8 md:flex-row md:justify-between">
                <h4>{title}</h4>
                <span className={`${getStatusColor(status)} ${getTextColor(status)}`}>{status}</span>
            </section>
            <section className="education-item__info">
                <h6>{institution}</h6>
                <span>{startYear} - {endYear}</span>
                <p>{description}</p>
            </section>
        </div>
    );
}

export default CourseView;