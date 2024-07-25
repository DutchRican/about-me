import About from './components/About'
import Header from './components/Header'
import LinkSection from './components/LinkSection'


function App() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Header />
      <div className='w-7/12 max-w-4xl'>
        <div className='image-container relative'>
          <img src="https://utfs.io/f/f9d84dfa-05bb-4929-b3c0-46131686aabf-1x9cqp.jpeg"
            alt="Paul in Germany" className='image'
          />
        </div>
      </div>
      <About />
      <div className='flex flex-row justify-start w-7/12 max-w-4xl py-6 gap-6'>
        <LinkSection title="Social Items" links={[
          { url: 'https://www.linkedin.com/in/paul-van-woensel-vdubs/', name: 'LinkedIn' },
          { url: 'https://github.com/DutchRican', name: 'GitHub' },
          { url: 'https://gitlab.com/users/DutchRican/projects', name: 'GitLab' }]}
        />
        <div>
          <LinkSection title="Personal projects (more coming soon)" links={[
            { url: 'https://memory-pi-roan.vercel.app', name: 'Memory Game (Vue)' },
          ]} />
        </div>
      </div>
    </main>
  )
}

export default App
