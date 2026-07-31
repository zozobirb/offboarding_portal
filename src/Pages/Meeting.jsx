import './Meeting.css'
import './meeting-page.js'
  
  

  function Meeting(){
  
  
  return( 
    <>
<div className="main-body-meeting">
<div className="title-body-meeting">
  <h1>Meeting Hub</h1>

  <button className="btn-request">Meeting Feedback</button>
</div>
    

<div className="form-container-meeting">

<div className="form-display-meeting">
    <button className="cancel-btn">Cancel</button>
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

        <button type="submit" id="sub-btn">Submit Feedback</button>
    </form>
</div>

</div>








<div className="meeting-body">

    <div className="meeting-card">
        <div className="title_track">
            <h2 className="h2-meeting" id="man-title">Mandatory Meeting</h2>
            <div className="tracker-body"> 
                <svg className="svg-man">
  <circle className="man-cir"/>
</svg>

         <svg className="svg-man">
  <circle className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir"/>
</svg>

             <svg className="svg-man">
  <circle className="man-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="man-cir" id="last-cir"/>
</svg>


            </div>
        </div>
    <aside className="log-body">
         <h3>Log Mandatory Attendance</h3>
        <div className="btn-container">
            <button className="btn" id="man-log">+</button>
            <p className="btn-text">Log a meeting attendance</p>
        </div>
    </aside>
    </div>

<div className="meeting-card">
        <div className="title_track-meeting">
            <h2 className="h2-meeting" id="one-title">1:1 Meeting</h2>
            <div className="tracker-body">
                
                
                <svg className="svg-man">
  <circle className="one-cir"/>
</svg>

         <svg className="svg-man">
  <circle className="one-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir" id="min-cir"/>
</svg>


             <svg className="svg-man">
  <circle className="one-cir" id="last-one-cir"/>
</svg>


            </div>
        
       
        </div>
    <aside className="log-body">
        <h3>Modify 1:1 Meetings</h3>
        <div className="btn-container">
            <button className="btn" id="one-log">+</button>
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


 <script src="./meeting-page.js" defer></script>
</>
    );

    }

    export default Meeting;