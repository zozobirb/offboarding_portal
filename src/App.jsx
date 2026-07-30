import { useState } from 'react'
import Dashboard from './Dashboard.jsx'
import Project from './Project.jsx'
import {Routes, Route} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/projectHub" element={<Project />} /> 
        </Routes>
    
      
    </>
  )
}

export default App;
