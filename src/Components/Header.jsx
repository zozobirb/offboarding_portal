import { useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'



function Header(){

    const navigate = useNavigate();//this is used to navigate or go to another page!!
//navigate is a var, and it stores the useNavigate() function from the react-router-dom
  

return(

<>
<div class="header-body">
<div className="title-body">
  <h1 className="title-box" title="Offboarding Project"  onClick={() => navigate("/")}>
                            Offboarding Portal
                        </h1>
</div>
    
<div className="dashboard">
<div className="dash-children">

<Link className="link-name" to='/meetings'>Meeting Hub</Link>
  
</div>

  <div className="dash-children">
<Link className="link-name" to="/projectHub">Project Hub</Link>
</div>

  <div className="dash-children">
<Link to="/submissions" className="link-name">Submissions</Link>
</div>

  <div className="dash-children">
<Link to='/intern-hours' className="link-name">Intern Hours</Link>
</div>

  <div className="dash-children">
<Link to="/software-requests" className="link-name">Software Requests</Link>
</div>

</div>
</div>
</>






);



}

export default Header;
