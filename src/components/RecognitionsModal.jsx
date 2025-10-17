import { Modal } from 'flowbite-react';
import { HiCalendar, HiLocationMarker, HiUsers, HiPresentationChartLine, HiHeart, HiX } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';

const RecognitionsModal = ({ isOpen, onClose, recognitions }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'event':
        return <HiPresentationChartLine className="w-5 h-5" />;
      case 'award':
        return <HiTrophy className="w-5 h-5" />;
      case 'volunteer':
        return <HiHeart className="w-5 h-5" />;
      default:
        return <HiUsers className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'event':
        return 'Evento';
      case 'award':
        return 'Premio';
      case 'volunteer':
        return 'Voluntariado';
      default:
        return 'Otro';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
  };

  return (
    <Modal show={isOpen} onClose={onClose} size="4xl">
      <Modal.Header className="dark:bg-gray-800 dark:border-gray-700">
        Todos los Reconocimientos
      </Modal.Header>
      <Modal.Body className="dark:bg-gray-800 max-h-[70vh] overflow-y-auto">
        <div className="space-y-4">
          {recognitions.map((recognition, index) => (
            <div
              key={recognition.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300 dark:bg-gray-700"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                  {getTypeIcon(recognition.type)}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase">
                    {getTypeLabel(recognition.type)}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    {recognition.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-2">
                  <HiUsers className="w-4 h-4" />
                  <span className="font-medium">{recognition.organization}</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiCalendar className="w-4 h-4" />
                  <span>{formatDate(recognition.date)}</span>
                </div>

                {recognition.location && (
                  <div className="flex items-center gap-2">
                    <HiLocationMarker className="w-4 h-4" />
                    <span>{recognition.location}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {recognition.description}
              </p>

              {recognition.certificate && (
                <a
                  href={recognition.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Ver certificado →
                </a>
              )}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RecognitionsModal;