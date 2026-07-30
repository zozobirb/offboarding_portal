import { useState } from 'react'
import './ProjectPage.css'
import { useNavigate, useLocation } from 'react-router-dom'




function Project(){

    return(
    <div className="main-body">
        <h1 id="page-title">Project Hub</h1>


        <aside className="project-track">
                <form class="form-container"/>
                    <h2>Project Track</h2>


                      <div className="project-check">
            <h3>Project One</h3>
                <div className="check-container" id="check-one">
                   <div className="check+label">
                    <input type="checkbox" className="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>

                    
                    <div className="project-check">
            <h3>Project Two</h3>
                <div className="check-container" id="check-two">
                     <div className="check+label">
                    <input type="checkbox" class="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


                    <div className="project-check">
            <h3>Project Three</h3>
                <div className="check-container" id="check-three">
                    <div className="check+label">
                    <input type="checkbox" class="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>

                    <div className="project-check">
            <h3>Project Four</h3>
                <div className="check-container" id="check-four">
                     <div className="check+label">
                    <input type="checkbox" className="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


                    <div className="project-check">
            <h3>Project Five</h3>
                <div className="check-container" id="check-five">
                     <div className="check+label">
                    <input type="checkbox" className="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


                   <div className="project-check">
            <h3>Project Six</h3>
                <div className="check-container" id="check-six">
                     <div className="check+label">
                    <input type="checkbox" className="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


                    <div className="project-check">
            <h3>Project Seven</h3>
                <div className="check-container" id="check-seven">
                     <div className="check+label">
                    <input type="checkbox" class="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" className="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


                    <div class="project-check">
            <h3>Project Eight</h3>
                <div class="check-container" id="check-eight">
                     <div className="check+label">
                    <input type="checkbox" className="check ck-IP"></input>
                    <label for="ip-label">IP</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Complete"></input>
                    <label for="comp-label">Complete</label>
                    </div>
                    <div className="check+label">
                    <input type="checkbox" class="check ck-Over"></input>
                    <label for="over-label">Overdue</label>
                    </div>
                </div>    
                    </div>


        </aside>

        <div className="project-deat-body">


            <div className="drop-down-proj">
                <select id="type" name="type">
                <option value="wk-one">Week 1</option>
                <option value="wk-two">Week 2</option>
                <option value="wk-three">Week 3</option>
                <option value="wk-four">Week 4</option>
                <option value="wk-five">Week 5</option>
                <option value="wk-six">Week 6</option>
                <option value="wk-seven">Week 7</option>
                <option value="wk-eight">Week 8</option>
            </select>
                <label for="type">Project Week</label>
            

            </div>

            <h3>Topic:</h3>

            <p className="topic-p">
               Attention to Detail & Problem Solving, Branding
            </p>

            <h4>Deliverables</h4>

            <p className="deliverable-p">
                TLT Review and connect with others.

All interns have the same project this week. You will be learning about the organization. Information found during this review will be

needed in future projects.
TLT Scavenger Hunt. Locate and complete the scavenger hunt document in
your shared folder. Prepare a detailed response to each item listed, on where
and what you find along the way. Yes, use the Scavenger Hunt word
document found in your personal share drive folder. Put the finished
scavenger hunt in the &atscompleted project&ats folder of your shared drive, no
later than Sunday noon.
            </p>


        </div>


    </div>
);



}

export default Project;