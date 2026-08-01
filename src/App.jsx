import { useState } from 'react'
import Dashboard from './Pages/Dashboard.jsx'
import Project from './Pages/Project.jsx'
import {Routes, Route} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Components/Header.jsx' 
import Meeting from './Pages/Meeting.jsx'
import SoftwareRequest from './Pages/SoftwareRequest'
import Submission from './Pages/Submission.jsx'

import './App.css'

function App() {

  return (
    <>

    <Header />
    
       <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/projectHub" element={<Project />} /> 
              <Route path="/meetings" element={<Meeting />} /> 
              <Route path="/software-requests" element={<SoftwareRequest />} /> 
              <Route path="/submissions" element={<Submission />} /> 
             
        </Routes>

    
      
    </>
  )
}

export default App;
