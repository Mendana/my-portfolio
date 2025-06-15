import './App.css'
import MobileNavBar from './components/MobileNavBar'
import { Typewriter } from 'react-simple-typewriter'
import ProjectView from './components/ProjectView'
import projectsData from './data/projects.json'
import Expertise from './components/Expertise'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
      <MobileNavBar />
      <header className='w-9/10 mx-auto'>
        <h2 className='title-underline text-xl text-[var(--text-tertiary)] mt-40 '>
          PORTFOLIO 2025
        </h2>
      </header>
      <main className='w-9/10 mx-auto mt-12'>
        <section className='mb-50'>
          <h1 className='text-6xl font-bold font-mono leading-tight min-h-[9.5rem]'>
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
          <div className='flex flex-col gap-10 mt-16'>
            <article className='brief-info-container'>
              <ul>
                <li>
                  <h6 className='text-xl font-medium'>LOCATION</h6>
                  <p>Oviedo, España</p>
                </li>

                <li>
                  <h6 className='text-xl font-medium'>STATUS</h6>
                  <p>Studying. Available for Projects</p>
                </li>
                <li>
                  <h6 className='text-xl font-medium'>EXPERIENCE</h6>
                  <p>No professional experience yet</p>
                </li>
              </ul>
            </article>

            <article>
              <p className='main-text'>Studying a double degree in <strong>Software Engineering</strong> and <strong>Mathematics</strong> in Oviedo. Currently a student at Platzi and I am interested in <strong>full-stack</strong> development, <strong>Artificial Intelligence</strong> and Machine Learning.</p>
            </article>
          </div>
        </section>

        <section id='work' className='mb-50'>
          <h2 className='text-5xl font-bold mb-8'>SELECTED WORK</h2>

          <p className='main-text'>A collection of some of my projects in both web development and AI.</p>

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
          <h2 className='text-5xl font-bold mb-8'>EXPERTISE</h2>
          <Expertise />
        </section>

        <section id='about' className='mb-50'>
          <h2 className='text-5xl font-bold mb-8'>ABOUT</h2>
          <AboutMe />
        </section>
      </main>
    </>
  )
}

export default App;