import About from './components/About'
import Header from './components/Header'
import LinkSection from './components/LinkSection'


function App() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center py-8 px-4'>
      <Header />
      <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 mb-12'>
        <div className='flex-1 max-w-md'>
          <div className='image-container relative'>
            <img src="https://utfs.io/f/f9d84dfa-05bb-4929-b3c0-46131686aabf-1x9cqp.jpeg"
              alt="Paul in Germany" className='image rounded-lg shadow-2xl'
            />
          </div>
        </div>
        <div className='flex-1'>
          <About />
        </div>
      </div>
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8'>
        <LinkSection title="Social Links" links={[
          { url: 'https://www.linkedin.com/in/paul-van-woensel-vdubs/', name: 'LinkedIn' },
          { url: 'https://github.com/DutchRican', name: 'GitHub' },
          { url: 'https://gitlab.com/users/DutchRican/projects', name: 'GitLab' },
          { url: 'https://www.npmjs.com/settings/dutchrican/packages', name: 'NPM' }]}
        />
        <LinkSection title="Personal Projects" links={[
          { url: 'https://workout-tracker-black-nu.vercel.app/', name: 'Workout Tracker'},
          { url: 'https://github.com/DutchRican/a11y_reports', name: 'A11y Reports (React)' },
          { url: 'https://www.npmjs.com/package/sonarqube_prep', name: 'SonarQube Prep CLI' },
          { url: 'https://www.npmjs.com/package/@dutchrican/playwright-quick-start', name: 'Playwright Quick Start' },
          { url: 'https://memory-pi-roan.vercel.app', name: 'Memory Game (Vue)' },
        ]} />
      </div>
    </main>
  )
}

export default App
