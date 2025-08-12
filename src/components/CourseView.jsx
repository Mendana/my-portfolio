import { FaRegCalendarAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function CourseView({
    title,
    institution,
    date,
    hours,
    area,
    aptitudes,
}) {
    const [visibleAptitudes, setVisibleAptitudes] = useState([]);
    const [hiddenAptitudes, setHiddenAptitudes] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const aptitudesRef = useRef(null);

    // Función para calcular qué aptitudes mostrar en la primera línea
    useEffect(() => {
        if (!aptitudesRef.current || !containerRef.current || !aptitudes.length) return;

        // Calcular el ancho disponible
        const containerWidth = aptitudesRef.current.offsetWidth;
        let totalWidth = 0;
        const itemWidths = [];
        const tempContainer = document.createElement('div');
        tempContainer.style.visibility = 'hidden';
        tempContainer.style.position = 'absolute';
        tempContainer.style.display = 'inline-block';
        tempContainer.style.fontSize = '1.2rem';
        tempContainer.style.padding = '4px 8px';
        document.body.appendChild(tempContainer);

        // Medir cada aptitud
        aptitudes.forEach((aptitude) => {
            tempContainer.textContent = aptitude;
            const width = tempContainer.offsetWidth + 12; // 12px para margen
            itemWidths.push({ aptitude, width });
            totalWidth += width;
        });

        document.body.removeChild(tempContainer);

        // Si todo cabe, mostrar todas
        if (totalWidth <= containerWidth) {
            setVisibleAptitudes(aptitudes);
            setHiddenAptitudes([]);
            return;
        }

        // Determinar cuántas aptitudes mostrar
        let currentWidth = 0;
        const visible = [];
        const hidden = [];

        for (const item of itemWidths) {
            if (currentWidth + item.width <= containerWidth - 50) { // 50px para el botón "más"
                visible.push(item.aptitude);
                currentWidth += item.width;
            } else {
                hidden.push(item.aptitude);
            }
        }

        setVisibleAptitudes(visible);
        setHiddenAptitudes(hidden);
    }, [aptitudes]);

    return (
        <div className="course-item p-6 rounded-xl" ref={containerRef}>
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
                <div className="course-item__aptitudes" ref={aptitudesRef}>
                    {isExpanded ? (
                        // Mostrar todas las aptitudes si está expandido
                        aptitudes.map((aptitude, index) => (
                            <span key={index} className="course-item__aptitude">
                                {aptitude}
                            </span>
                        ))
                    ) : (
                        // Mostrar solo las visibles y un botón "más" si hay ocultas
                        <>
                            {visibleAptitudes.map((aptitude, index) => (
                                <span key={index} className="course-item__aptitude">
                                    {aptitude}
                                </span>
                            ))}
                            {hiddenAptitudes.length > 0 && (
                                <button 
                                    className="course-item__more-btn"
                                    onClick={() => setIsExpanded(true)}
                                >
                                    +{hiddenAptitudes.length} more
                                </button>
                            )}
                        </>
                    )}
                </div>
                {/* Si está expandido y hay aptitudes ocultas, mostrar botón para contraer */}
                {isExpanded && hiddenAptitudes.length > 0 && (
                    <button 
                        className="course-item__less-btn mt-2"
                        onClick={() => setIsExpanded(false)}
                    >
                        Show less
                    </button>
                )}
            </section>
        </div>
    );
}

export default CourseView;