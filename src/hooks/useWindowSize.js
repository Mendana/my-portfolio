import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler para llamar al resize del navegador
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Añadir event listener
    window.addEventListener("resize", handleResize);
    
    // Llamar al handler inicialmente
    handleResize();
    
    // Eliminar event listener al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array vacío significa que este efecto solo se ejecuta al montar y desmontar

  return windowSize;
}