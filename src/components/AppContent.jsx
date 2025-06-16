import { useTheme } from '../context/ThemeContext';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';
import ScrollProgressBar from './ScrollProgressBar';
import ProjectView from './ProjectView';
import Expertise from './Expertise';
import AboutMe from './AboutMe';
import MyFooter from './MyFooter';
import { Typewriter } from 'react-simple-typewriter';
import projectsData from '../data/projects.json';

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
          <h2 className='title-underline text-xl text-[var(--text-tertiary)] mt-40 '>
            PORTFOLIO 2025
          </h2>
        </header>
        <main className='w-9/10 mx-auto mt-12 lg:max-w-[1200px]'>
          <section className='mb-50'>
            <h1 className='text-6xl font-bold font-mono leading-tight min-h-[9.5rem] md:text-8xl lg:text-9xl'>
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
            <div className='info-container flex flex-col gap-10 mt-16'>
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

              <article className='brief-resume-container'>
                <p className='main-text'>Studying a double degree in <strong>Software Engineering</strong> and <strong>Mathematics</strong> in Oviedo. Currently a student at Platzi and I am interested in <strong>full-stack</strong> development, <strong>Artificial Intelligence</strong> and Machine Learning.</p>
              </article>
            </div>
          </section>

          <section id='work' className='mb-50'>
            <h2 className='text-5xl font-bold mb-8 lg:text-6xl'>SELECTED WORK</h2>

            <p className='main-text lg:w-7/10'>A collection of some of my projects in both web development and AI.</p>

            <div>
              {projectsData.projects.map((project, index) => (
                <ProjectView 
                  key={project.id || index}
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
              ))}
            </div>
          </section>

          <section className='mb-50'>
            <Expertise />
          </section>

          <section id='about' className='mb-50'>
            <AboutMe />
          </section>
        </main>
        <footer id='contact'>
          <MyFooter />
        </footer>
      </main>
    );
}

export default AppContent;