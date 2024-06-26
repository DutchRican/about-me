import './App.css'
import About from './components/About'
import Header from './components/Header'
import LinkSection from './components/LinkSection'


function App() {
  return (
    <>
      <Header />
      <div className='image-container'>
        <img src="https://utfs.io/f/f9d84dfa-05bb-4929-b3c0-46131686aabf-1x9cqp.jpeg"
          alt="Paul van Woensel" width="100%" height={480} style={{ objectFit: 'cover' }}
        />
      </div>
      <About />
      <div className='link-section'>
        <LinkSection title="Social" links={[
          { url: 'https://www.linkedin.com/in/paul-van-woensel-vdubs/', name: 'LinkedIn' },
          { url: 'https://github.com/DutchRican', name: 'GitHub' },
          { url: 'https://gitlab.com/users/DutchRican/projects', name: 'GitLab' }]}
        />
      </div>
    </>
  )
}

export default App
