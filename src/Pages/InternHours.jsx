import './InternHours.css'
import { useState } from 'react'



function validateEnd(start){



}



function InternHours(){

    const [startTime, setStart] = useState('');
    const [form_display_hrs, setDisplay] = useState('revert');
    const [view_hrs, setView_hrs] = useState('none');
        const [view_btn, setView_btn] = useState('revert');



return(


<div className="main-body-hrs">
    <h1 className="page-title-hrs">Intern Hours Form</h1>
    <p id="msg-hrs">Please log hours daily. Please note start and end times accurately</p>
<form action="#" method="POST" className="form-body-hrs" style={{display : form_display_hrs}}>

<div className="label-input-hrs">
    <label  className="label-hrs" requrired>Date:</label>
    <input name="date" className="input-hrs" type="date"/>
</div>

<div className="label-input-hrs">
    <label className="label-hrs">Start Time:</label>
    <input name="start-date" className="input-hrs"
      type="time"
      name="appointment-time"
      min="5:00"
      max="11:59"
      required
      onChange={(e)=> setStart(e)}/>
</div>



<div className="label-input-hrs">
    <label className="label-hrs">End Time:</label>
    <input name="start-date" className="input-hrs"
      type="time"
      name="appointment-time"
      min={startTime}
      max="11:59"
      required/>
</div>

<div className="btn-bod-hrs">
<button className="sub-btn-hrs" onSubmit={() => (setDisplay('none'))}>Submit</button>

</div>






</form>


<div className="ty-sub" style={{display : "none"}}>
    <p>Thank you for submitting! Please re-load page, if you need to submit any other times!</p>

</div>


<div className="hours-total-bod">
    <button className="view-btn" onClick={()=> (setView_hrs('revert'))}>View Total Hours</button>
    <button className="close-btn" onClick={()=> (setView_hrs('none'))} style={{display:view_hrs}}>Close</button>
    
    <div className="view-hrs" style={{ display: view_hrs}}>
    <h2>Total Intern Hours:</h2>
 {/* THis  requires database fetching */}
 <p id="hrs-display"> X </p>
 </div>
</div>

</div>

);

}

export default InternHours;



