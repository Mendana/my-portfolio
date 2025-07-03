import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useAnimateOnScroll(threshold = 0.2) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true, // La animación se ejecuta solo una vez
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}