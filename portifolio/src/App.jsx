import './App.css'

import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Habilities from './components/Habilities'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Presentation/>
        <Projects/>
        <Habilities/>
      </main>
    </>
  )
}

export default App
