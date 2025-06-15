# 🎨 Portfolio Style Guide

## 📋 Tabla de Contenidos
1. [Filosofía de Diseño](#filosofía-de-diseño)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Breakpoints Responsive](#breakpoints-responsive)
6. [Componentes](#componentes)
7. [Animaciones](#animaciones)
8. [Estados Interactivos](#estados-interactivos)
9. [Iconografía](#iconografía)
10. [Mejores Prácticas](#mejores-prácticas)

---

## 🎯 Filosofía de Diseño

### Principios Fundamentales
- **Minimalismo Elegante**: Menos es más, cada elemento tiene un propósito
- **Tipografía como Protagonista**: El contenido es el rey
- **Espacios en Blanco**: Respiración visual para mejor legibilidad
- **Consistencia**: Patrones repetibles y predecibles
- **Accesibilidad**: Diseño inclusivo para todos los usuarios

### Estética
- **Estilo**: Minimalista, moderno, profesional
- **Mood**: Limpio, sofisticado, técnico
- **Inspiración**: Diseño suizo, Bauhaus, portfolios de desarrolladores premium

---

## 🎨 Paleta de Colores

### Colores Principales

#### Modo Claro (Light Mode)
```css
/* Backgrounds */
--bg-primary: #ffffff;        /* Fondo principal */
--bg-secondary: #f9fafb;      /* Fondo secundario (gray-50) */

/* Text */
--text-primary: #000000;      /* Texto principal */
--text-secondary: #374151;    /* Texto secundario (gray-700) */
--text-tertiary: #6b7280;     /* Texto terciario (gray-500) */
--text-muted: #9ca3af;        /* Texto deshabilitado (gray-400) */

/* Borders */
--border-primary: #e5e7eb;    /* Bordes principales (gray-200) */
--border-secondary: #d1d5db;  /* Bordes secundarios (gray-300) */

/* Interactive */
--interactive-hover: #f3f4f6; /* Hover backgrounds (gray-100) */
```

#### Modo Oscuro (Dark Mode)
```css
/* Backgrounds */
--bg-primary: #111827;        /* Fondo principal (gray-900) */
--bg-secondary: #1f2937;      /* Fondo secundario (gray-800) */

/* Text */
--text-primary: #ffffff;      /* Texto principal */
--text-secondary: #d1d5db;    /* Texto secundario (gray-300) */
--text-tertiary: #9ca3af;     /* Texto terciario (gray-400) */
--text-muted: #6b7280;        /* Texto deshabilitado (gray-500) */

/* Borders */
--border-primary: #374151;    /* Bordes principales (gray-700) */
--border-secondary: #4b5563;  /* Bordes secundarios (gray-600) */

/* Interactive */
--interactive-hover: #1f2937; /* Hover backgrounds (gray-800) */
```

## Colores de estado
```css
/* Success */
--success: #10b981;           /* Verde (emerald-500) */
--success-bg: #d1fae5;        /* Verde claro (emerald-100) */

/* Warning */
--warning: #f59e0b;           /* Amarillo (amber-500) */
--warning-bg: #fef3c7;        /* Amarillo claro (amber-100) */

/* Error */
--error: #ef4444;             /* Rojo (red-500) */
--error-bg: #fee2e2;          /* Rojo claro (red-100) */
```

### Uso de colores
- **Negro puro (#000000)**: Solo para texto principal y elementos de máximo contraste
- **Blanco puro (#ffffff)**: Solo para fondos principales y texto sobre fondos oscuros
- **Grises**: Para crear jerarquía visual y elementos secundarios
- **Colores de estado**: Solo para indicadores específicos (Live, Development, etc.)

---

## Tipografía

### Font Stack
```css
font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
```

### Jerarquía Tipográfica

#### Títulos Principales
```css
/* Hero Title - Mobile */
.hero-title-mobile {
  font-size: 2.25rem;    /* 36px */
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.025em;
}

/* Hero Title - Desktop */
.hero-title-desktop {
  font-size: 6rem;       /* 96px */
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.025em;
}
```

#### Títulos de Sección
```css
/* Section Title - Mobile */
.section-title-mobile {
  font-size: 1.875rem;   /* 30px */
  line-height: 1.2;
  font-weight: 700;
}

/* Section Title - Desktop */
.section-title-desktop {
  font-size: 3.75rem;    /* 60px */
  line-height: 1.2;
  font-weight: 700;
}
```

#### Títulos de Proyecto
```css
/* Project Title - Mobile */
.project-title-mobile {
  font-size: 1.25rem;    /* 20px */
  line-height: 1.3;
  font-weight: 700;
}

/* Project Title - Desktop */
.project-title-desktop {
  font-size: 1.875rem;   /* 30px */
  line-height: 1.3;
  font-weight: 700;
}
```

#### Texto Cuerpo
```css
/* Body Text - Mobile */
.body-mobile {
  font-size: 1rem;       /* 16px */
  line-height: 1.6;
  font-weight: 400;
}

/* Body Text - Desktop */
.body-desktop {
  font-size: 1.125rem;   /* 18px */
  line-height: 1.6;
  font-weight: 400;
}
```

#### Texto Pequeño
```css
/* Small Text */
.text-small {
  font-size: 0.875rem;   /* 14px */
  line-height: 1.5;
  font-weight: 400;
}

/* Extra Small Text */
.text-xs {
  font-size: 0.75rem;    /* 12px */
  line-height: 1.4;
  font-weight: 400;
}
```

### Reglas Tipográficas
- **Contraste**: Mínimo 4.5:1 para texto normal, 3:1 para texto grande
- **Longitud de línea**: Máximo 75 caracteres para legibilidad óptima
- **Interlineado**: 1.5-1.6 para texto cuerpo, 1.2 para títulos
- **Jerarquía**: Usar tamaño, peso y color para crear jerarquía clara

---

## 📐 Espaciado y Layout

### Sistema de Espaciado (Tailwind Scale)
```css
/* Espaciado Base */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### Contenedores
```css
/* Container Principal */
.container {
  max-width: 72rem;      /* 1152px */
  margin: 0 auto;
  padding: 0 1rem;       /* 16px mobile */
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;   /* 24px tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 4rem;     /* 64px desktop */
  }
}
```

### Espaciado de Secciones
```css
/* Mobile */
.section-spacing-mobile {
  padding-top: 3rem;     /* 48px */
  padding-bottom: 3rem;  /* 48px */
}

/* Tablet */
.section-spacing-tablet {
  padding-top: 4rem;     /* 64px */
  padding-bottom: 4rem;  /* 64px */
}

/* Desktop */
.section-spacing-desktop {
  padding-top: 5rem;     /* 80px */
  padding-bottom: 5rem;  /* 80px */
}
```

### Grid System
```css
/* Mobile First Grid */
.grid-mobile {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;             /* 32px */
}

/* Tablet Grid */
.grid-tablet {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;             /* 32px */
}

/* Desktop Grid */
.grid-desktop {
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;             /* 32px */
}
```

---

## 📱 Breakpoints Responsive

### Breakpoints Principales
```css
/* Mobile First Approach */

/* Extra Small (Default) */
/* 0px - 639px */
/* Teléfonos pequeños */

/* Small */
@media (min-width: 640px) {
  /* sm: 640px - 767px */
  /* Teléfonos grandes */
}

/* Medium */
@media (min-width: 768px) {
  /* md: 768px - 1023px */
  /* Tablets */
}

/* Large */
@media (min-width: 1024px) {
  /* lg: 1024px - 1279px */
  /* Desktop pequeño */
}

/* Extra Large */
@media (min-width: 1280px) {
  /* xl: 1280px+ */
  /* Desktop grande */
}
```

### Patrones de Uso
```css
/* Patrón Típico de Clases Responsive */
.responsive-element {
  /* Mobile (default) */
  font-size: 1rem;
  padding: 1rem;
  
  /* Tablet */
  @media (min-width: 640px) {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    padding: 2rem;
  }
}
```

### Navegación Responsive
```css
/* Mobile: Menú hamburguesa */
.nav-mobile {
  display: block;
}

.nav-desktop {
  display: none;
}

/* Desktop: Navegación horizontal */
@media (min-width: 768px) {
  .nav-mobile {
    display: none;
  }
  
  .nav-desktop {
    display: flex;
  }
}
```

---

## 🧩 Componentes

### Botones

#### Botón Primario
```css
.btn-primary {
  background: #000000;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #1f2937;
  transform: translateY(-2px);
}

.dark .btn-primary {
  background: #ffffff;
  color: #000000;
}

.dark .btn-primary:hover {
  background: #f3f4f6;
}
```

#### Botón Secundario
```css
.btn-secondary {
  background: transparent;
  color: #000000;
  padding: 0.75rem 2rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #000000;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #000000;
  color: #ffffff;
}

.dark .btn-secondary {
  color: #ffffff;
  border-color: #ffffff;
}

.dark .btn-secondary:hover {
  background: #ffffff;
  color: #000000;
}
```

### Cards de Proyecto
```css
.project-card {
  padding: 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  background: rgba(0, 0, 0, 0.02);
  transform: translateY(-2px);
}

.dark .project-card:hover {
  background: rgba(255, 255, 255, 0.02);
}
```

### Navegación
```css
.nav-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
}

.dark .nav-container {
  background: rgba(17, 24, 39, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
}
```

### Tech Tags
```css
.tech-tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: #000000;
  color: #ffffff;
  transform: scale(1.05);
}

.dark .tech-tag {
  background: #1f2937;
  color: #9ca3af;
}
```

---

## ✨ Animaciones

### Principios de Animación
- **Duración**: 200-500ms para micro-interacciones
- **Easing**: `ease-out` para entradas, `ease-in` para salidas
- **Performance**: Usar `transform` y `opacity` cuando sea posible
- **Propósito**: Cada animación debe tener un propósito funcional

### Animaciones de Entrada
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
```

### Hover Effects
```css
/* Hover Scale */
.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Hover Slide */
.hover-slide {
  transition: transform 0.2s ease;
}

.hover-slide:hover {
  transform: translateX(8px);
}
```

### Loading States
```css
/* Pulse Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## 🎯 Estados Interactivos

### Estados de Hover
```css
/* Text Hover */
.text-hover {
  color: #6b7280;
  transition: color 0.2s ease;
}

.text-hover:hover {
  color: #000000;
}

.dark .text-hover:hover {
  color: #ffffff;
}

/* Background Hover */
.bg-hover {
  transition: background-color 0.2s ease;
}

.bg-hover:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.dark .bg-hover:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
```

### Estados de Focus
```css
.focus-ring {
  outline: none;
  transition: box-shadow 0.2s ease;
}

.focus-ring:focus {
  box-shadow: 0 0 0 2px #000000;
}

.dark .focus-ring:focus {
  box-shadow: 0 0 0 2px #ffffff;
}
```

### Estados Activos
```css
.active-scale {
  transition: transform 0.1s ease;
}

.active-scale:active {
  transform: scale(0.95);
}
```

---

## 🎨 Iconografía

### Librería de Iconos
- **Fuente**: Lucide React
- **Estilo**: Outline, minimalista
- **Tamaños**: 16px, 20px, 24px
- **Stroke Width**: 2px (consistente)

### Tamaños de Iconos
```css
/* Small Icons */
.icon-sm {
  width: 1rem;    /* 16px */
  height: 1rem;   /* 16px */
}

/* Medium Icons */
.icon-md {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
}

/* Large Icons */
.icon-lg {
  width: 1.5rem;  /* 24px */
  height: 1.5rem; /* 24px */
}
```

### Uso de Iconos
- **Navegación**: Arrow, Menu, X
- **Social**: Github, Linkedin, Mail
- **Acciones**: Download, External Link
- **Estados**: Check (Live), Clock (Development)

---

## ✅ Mejores Prácticas

### Accesibilidad
```css
/* Contraste mínimo */
/* Normal text: 4.5:1 */
/* Large text: 3:1 */

/* Focus visible */
.focus-visible {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Performance
```css
/* GPU Acceleration */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Optimize font rendering */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Mobile Optimization
```css
/* Touch targets */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Prevent zoom on input focus */
input, select, textarea {
  font-size: 16px;
}

/* Prevent horizontal scroll */
body {
  overflow-x: hidden;
}
```

### Dark Mode
```css
/* Smooth theme transition */
* {
  transition: background-color 0.3s ease, 
              border-color 0.3s ease, 
              color 0.3s ease;
}

/* Respect user preference */
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables */
  }
}
```

---

## 📝 Checklist de Implementación

### ✅ Responsive Design
- [ ] Mobile first approach
- [ ] Breakpoints consistentes
- [ ] Touch targets de 44px mínimo
- [ ] Navegación adaptativa
- [ ] Imágenes responsive

### ✅ Accesibilidad
- [ ] Contraste adecuado
- [ ] Focus visible
- [ ] Texto alternativo
- [ ] Navegación por teclado
- [ ] Screen reader friendly

### ✅ Performance
- [ ] Animaciones optimizadas
- [ ] Lazy loading
- [ ] Fuentes optimizadas
- [ ] Imágenes comprimidas
- [ ] CSS minificado

### ✅ Consistencia
- [ ] Espaciado sistemático
- [ ] Tipografía coherente
- [ ] Colores consistentes
- [ ] Componentes reutilizables
- [ ] Patrones de interacción

---

*Esta guía de estilos debe ser un documento vivo que evolucione con el proyecto.*