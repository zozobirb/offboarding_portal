import './Submission.css'
import { useState } from 'react'




function Submission(){

    //useStates may only be used in functional components!!
    const [currWeek, setWeek] = useState('');


return(
    <>
<div className="main-body-sub">

<h1 id="page-title-sub">Project Submissions</h1>

<div className="drop-down-sub">
     <label for="project">Project Week:</label>
    <select id="select-ini" name="Weeks" onChange={(e)=> setWeek(e.target.value)}>
        <option value="One" class="opt">Week One</option>
        <option value="Two" class="opt">Week Two</option>
        <option value="Three" class="opt">Week Three</option>
        <option value="Four" class="opt">Week Four</option>
        <option value="Five" class="opt">Week Five</option>
        <option value="Six" class="opt">Week Six</option>
        <option value="Seven" class="opt">Week Seven</option>
        <option value="Eight" class="opt">Week Eight</option>

    </select>
   
</div>


<div className="title-upload-sub">
    <h2 id="week-select">Week {currWeek} Submission:</h2>
    <form className="upload-body-sub">
        <label for="file-up">Please upload files</label> 
        <input className="input-file" type="file" id="file-upload" name="file"/>
    </form>


</div>






</div>



<script src="script.js"></script>
</>
);



}

export default Submission;