import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';
import { HiCalendar, HiLocationMarker, HiAward, HiUsers, HiPresentationChartLine, HiHeart } from 'react-icons/hi';
import AnimateOnScroll from './AnimateOnScroll';
import RecognitionsModal from './RecognitionsModal';
import recognitionsData from '../data/recognitions.json';

const Recognitions = () => {
  const [showModal, setShowModal] = useState(false);
  const ITEMS_TO_SHOW = 3;

  const sortedRecognitions = [...recognitionsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const recentRecognitions = sortedRecognitions.slice(0, ITEMS_TO_SHOW);
  const hasMore = sortedRecognitions.length > ITEMS_TO_SHOW;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'event':
        return <HiPresentationChartLine className="w-5 h-5" />;
      case 'award':
        return <HiAward className="w-5 h-5" />;
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
    <section id="recognitions" className="py-16">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Reconocimientos y Participaciones
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recentRecognitions.map((recognition, index) => (
          <AnimateOnScroll key={recognition.id} delay={index * 0.1}>
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
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

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
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

              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                {recognition.description}
              </p>

              {recognition.certificate && (
                <a
                  href={recognition.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Ver certificado →
                </a>
              )}
            </Card>
          </AnimateOnScroll>
        ))}
      </div>

      {hasMore && (
        <AnimateOnScroll>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
            >
              Ver todos los reconocimientos ({sortedRecognitions.length})
            </motion.button>
          </div>
        </AnimateOnScroll>
      )}

      <RecognitionsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        recognitions={sortedRecognitions}
      />
    </section>
  );
};

export default Recognitions;