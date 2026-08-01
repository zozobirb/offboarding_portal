import './Meeting.css'
import { useState } from 'react'

  
  


  function Meeting(){
 
        const [countMan, setCountMan] = useState(0); 
    const [countOne, setCountOne] = useState(0);
    const [form_display, setDisplay] = useState('none');

    //use states MUST be used INSIDE COMPONENTS

  return( 
    <>


<div className="main-body-meeting">
<div className="title-body-meeting">
  <h1>Meeting Hub</h1>

  <button className="btn-request" onClick={() => (setDisplay('revert'))}>Meeting Feedback</button>
</div>
    

<div className="form-container-meeting" style={{ display: form_display }}>

<div className="form-display-meeting" >
    <button className="cancel-btn" onClick={() => (setDisplay('none'))} style={{display: form_display}}>Cancel</button>
    <h2 className="h2-meeting">1:1 Meeting Feedback</h2>
    <form action="#" method="POST">
        
        
        <div className="form-group-meeting">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required/>
        </div>

        <div className="form-group-meeting">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required/>
        </div>

         <div className="form-group-meeting">
            <label for="position">Your Position</label>
            <input type="position" id="position" name="position" placeholder="Intern Position" required/>
        </div>


        <div className="form-group-meeting">
            <label for="date">Meeting Date</label>
            <input type="date" id="date" name="date" required/>
        </div>

        <div className="form-group-meeting">
            <label for="time">Meeting Time</label>
            <input type="time" id="time" name="time" required/>
        </div>

        <div class="form-group-meeting">
            <label for="type">Mentor Name</label>
            <select id="type" name="type">
                <option value="web-dev">John Doe</option>
                <option value="finance">Jane Doe</option>
                <option value="gis">X</option>
            </select>
        </div>

        <div className="form-group">
            <label for="notes">Feedback Evaluation</label>
            <textarea id="eval" name="notes" placeholder="Feedback here...."></textarea>
        </div>

        <button type="submit" id="sub-btn" onClick={() => (setDisplay('none'))}>Submit Feedback</button>
    </form>
</div>

</div>








<div className="meeting-body">

    <div className="meeting-card">
        <div className="title_track">
            <h2 className="h2-meeting" id="man-title">Mandatory Meeting(Complete {countMan}/8)</h2>
            <div className="tracker-body"> 
                <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 1 ? "green" : "none"}/>
</svg>

         <svg className="svg-man">
  <circle fill={countMan >= 2 ? "green" : "none"} className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 3 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 4 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 5 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 6 ? "green" : "none"}/>
</svg>

             <svg className="svg-man">
  <circle className="man-cir" fill={countMan >= 7 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" id="last-cir" fill={countMan >= 8 ? "green" : "none"}/>
</svg>


            </div>
        </div>
    <aside className="log-body">
         <h3>Log Mandatory Attendance</h3>
        <div className="btn-container">
            <button className="btn" onClick={countMan >= 8 ? countMan : ()=> setCountMan(countMan + 1)} id="man-log">+</button>
            <p className="btn-text">Log a meeting attendance</p>
        </div>
    </aside>
    </div>

<div className="meeting-card">
        <div className="title_track-meeting">
            <h2 className="h2-meeting" id="one-title">1:1 Meeting(Complete {countOne}/5)</h2>
            <div className="tracker-body">
                
                
                <svg className="svg-man">
  <circle className="one-cir" fill={countOne >= 1 ? "green" : "none"}/>
</svg>

         <svg className="svg-man">
  <circle className="one-cir" fill={countOne >= 2 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir" fill={countOne >= 3 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir" id="min-cir" fill={countOne >= 4 ? "green" : "none"}/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir" id="last-one-cir" fill={countOne >= 5 ? "green" : "none"}/>
</svg>


            </div>
        
       
        </div>
    <aside className="log-body">
        <h3>Modify 1:1 Meetings</h3>
        <div className="btn-container">
            <button className="btn" id="one-log" onClick={countOne >= 5 ? countOne : ()=> setCountOne(countOne + 1)} >+</button>
            <p className="btn-text">Log a meeting</p>
        </div>
        <div className="btn-container">
            <button class="btn" id="reg-btn">+</button>
            <p className="btn-text">Register for a Meeting</p>
        </div>
        <div className="btn-container">
            <button className="btn" id="cancel-btn">-</button>
            <p className="btn-text">Cancel a Meeting</p>
        </div>
    </aside>
    </div>

   



</div>

  
  





  
</div>


</>
    );

    }

    export default Meeting;