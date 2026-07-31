import { useState } from 'react'
import Dashboard from './Pages/Dashboard.jsx'
import Project from './Pages/Project.jsx'
import {Routes, Route} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Components/Header.jsx' 


import './App.css'

function App() {

  return (
    <>

    <Header />
       <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/projectHub" element={<Project />} /> 
        </Routes>
    
      
    </>
  )
}

export default App;
