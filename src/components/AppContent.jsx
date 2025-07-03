import { useTheme } from '../context/ThemeContext';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';
import ScrollProgressBar from './ScrollProgressBar';
import ProjectView from './ProjectView';
import AboutMe from './AboutMe';
import MyFooter from './MyFooter';
import { Typewriter } from 'react-simple-typewriter';
import projectsData from '../data/projects.json';
import Education from './Education';
import AnimateOnScroll from './AnimateOnScroll';

function AppContent() {
    const { isDark } = useTheme();

    return (
        <main className={`bg-[var(--bg-primary)] transition-colors duration-300 ${isDark ? 'dark-theme' : 'light-theme'}`}>
            <ScrollProgressBar />
            {/* Nav responsive */}
            <div className="md:hidden">
                <MobileNavBar />
            </div>
            <div className="hidden md:block">
                <DesktopNavBar />
            </div>
            
            
        <header className='w-9/10 mx-auto lg:max-w-[1200px]'>
          <AnimateOnScroll direction="fromLeft">
            <h2 className='title-underline text-xl text-[var(--text-tertiary)] mt-40 '>
              PORTFOLIO 2025
            </h2>
          </AnimateOnScroll>
        </header>
        <main className='w-9/10 mx-auto mt-12 lg:max-w-[1200px]'>
          <section className='mb-50'>
            <AnimateOnScroll direction="fromRight" delay={0.2}>
              <h1 className='text-6xl font-bold font-mono leading-tight min-h-[9.5rem] md:text-8xl lg:text-9xl text-[var(--text-primary)]'>
                <Typewriter
                  words={['DIEGO DÍAZ MENDAÑA']}
                  loop={0} // 0 = infinito
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={30}
                  delaySpeed={2000} // tiempo que espera antes de empezar a borrar
                />
              </h1>
            </AnimateOnScroll>
            <div className='info-container flex flex-col gap-10 mt-16'>
              <AnimateOnScroll direction="fromRight" delay={0.4}>
                <article className='brief-info-container'>
                  <ul>
                    <li>
                      <h6 className='text-xl font-medium md:text-2xl'>LOCATION</h6>
                      <p className='md:text-xl'>Oviedo, España</p>
                    </li>

                    <li>
                      <h6 className='text-xl font-medium md:text-2xl'>STATUS</h6>
                      <p className='md:text-xl'>Studying. Available for Projects</p>
                    </li>
                    <li>
                      <h6 className='text-xl font-medium md:text-2xl'>EXPERIENCE</h6>
                      <p className='md:text-xl'>No professional experience yet</p>
                    </li>
                  </ul>
                </article>
              </AnimateOnScroll>

              <AnimateOnScroll direction="fromLeft" delay={0.4}>
                <article className='brief-resume-container'>
                  <p className='main-text'>Studying a double degree in <strong>Software Engineering</strong> and <strong>Mathematics</strong> in Oviedo. Currently a student at Platzi and I am interested in <strong>full-stack</strong> development, <strong>Artificial Intelligence</strong> and Machine Learning.</p>
                </article>
              </AnimateOnScroll>
            </div>
          </section>

          <section id='work' className='mb-80'>
            <AnimateOnScroll direction="fromLeft">
              <h2 className='text-5xl font-bold mb-8 lg:text-6xl text-[var(--text-primary)]'>SELECTED WORK</h2>
            </AnimateOnScroll>

            <AnimateOnScroll direction="fromRight" delay={0.2}>
              <p className='main-text lg:w-7/10'>A collection of some of my projects in both web development and AI.</p>
            </AnimateOnScroll>

            <div>
              {projectsData.projects.map((project, index) => (
                <AnimateOnScroll 
                  key={project.id || index}
                  direction={index % 2 === 0 ? "fromLeft" : "fromRight"}
                  delay={0.1 * index}
                >
                  <ProjectView 
                    id={index + 1}
                    title={project.name}
                    description={project.description}
                    status={project.status || 'down'}
                    image={project.image}
                    technologies={project.technologies || []}
                    year={project.year}
                    genre={project.genre}
                    link={project.link}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </section>

          <section id='education' className='mb-80'>
            <AnimateOnScroll direction="fromLeft">
              <Education />
            </AnimateOnScroll>
          </section>

          <section id='about' className='mb-80'>
            <AnimateOnScroll direction="fromLeft">
              <AboutMe />
            </AnimateOnScroll>
          </section>
        </main>
        <footer id='contact'>
          <MyFooter />
        </footer>
      </main>
    );
}

export default AppContent;