import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Nabvar from './components/layouts/Nabvar'
import Hero from './sections/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nabvar/>
        <Routes>
          <Route path='/' element={<Home />} />
                    <Route path='/_' element={<Hero />} />

          <Route path='project' element={<Project />} />
          <Route path='contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
