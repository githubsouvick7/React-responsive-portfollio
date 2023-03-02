import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import './App.css'
import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Project'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App