import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Events from './components/Events'
import About from './components/About'
import Mission from './components/Mission'
import  './components/responsive.css'
import './App.css'
import UpcomingEv from './components/UpcomingEv'
import Projects from './components/Projects'
import News from './components/News'
import Faqs from './components/Faqs'
import Team from './components/Team'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/upcoming' element={<UpcomingEv/>}/>
          <Route path='/mission' element={<Mission/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/faqs' element={<Faqs/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
