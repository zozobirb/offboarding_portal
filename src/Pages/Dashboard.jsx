import { useState } from 'react'
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom'




function Dashboard(){
  return(
    
<div className="main-body-dash">

  <div className="message-body"><div className="intro"><h2>Overview:</h2>
<p>Welcome to the Offboarding Portal. Here the portal will serve as a way to track your internship experience here at Organization.Inc,. Ensuring you are on track throughout your internship!</p>

<h3>What to find:</h3>
</div>
<div className="tabs">
    <div className="tab-article meetings">
    <h4>Meetings</h4>
    <ul>
      <li>Track meetings</li>
      <li>Update Meeting Status</li>
      <li>Register for 1:1 Meetings</li>
      
    </ul>
    <p>Here you can stay ontop of mandatory meetings and 1:1's meetings within the <strong>Meeting Hub</strong></p>
    </div>


   <div className="tab-article projects">
    <h4>Projects</h4>
    <ul>
      <li>Track project progress</li>
      <li>Project Completions and status</li>
      <li>Project Deliverables</li>
      
    </ul>
    <p>With the Project Hub, you can keep track of project statuses, reporting the current state of a project, for monitoring. As well, log completed projects, and view project details. This hub is essential for staying on-track towards project completion.</p>
    </div>


<div className="tab-article submissions">
    <h4>Submisions</h4>
    <ul>
      <li>Submit project files</li>
      <li>Access github repository</li>
      <li>Recieve constructive feedback</li>
      <li>Provide useful feedback for projects</li>
      
    </ul>
    <p>Under submissions, you will be able to submit proper project files, for review. And further submissions for interns participating in Website Development and Applications, locate in the Submission page. As well, provide feedback for projects.</p>
    </div>
    
<div className="tab-article hours">
    <h4>Intern Hours</h4>
    <ul>
      <li>Log Intern hours</li>
      <li>Live counter of total logged hours</li>
      
    </ul>
    <p>With Intern hours page, you can log hours easily, and track total intern hours.</p>
    </div>



<div className="tab-article requests">
    <h4>Software Requests</h4>
    <ul>
      <li>Request software/plugins</li>
      <li>Overview of current software provided by TLT</li>
      
    </ul>
    <p>With the Software Request able to effciently request the use of specific software/plugins that can be used towards completion of projects. Additionally access a list of current software provided.</p>
    </div>
    
    </div>
    
  </div>
  





  
</div>


  );
}

export default Dashboard;