import './SoftwareRequest.css'

function SoftwareRequest(){

return(
<div className="form-container-req">

<div className="form-display-req">
    <button className="cancel-btn">Cancel</button>
    <h2 className="h2-req">Software Request Form</h2>
    <form action="#" method="POST">
        
        
        <div className="form-group-req">
            <label className="label-req" for="name">Your Name</label>
            <input className="input-req" type="text" id="name" name="name" placeholder="John Doe" required/>
        </div>

        <div className="form-group-req">
            <label className="label-req" for="email">Your Email</label>
            <input className="input-req" type="email" id="email" name="email" placeholder="john@example.com" required/>
        </div>

         <div className="form-group-req">
            <label className="label-req" for="position">Your Position</label>
            <input className="input-req" type="position" id="position" name="position" placeholder="Intern Position" required/>
        </div>

          <div className="form-group-req">
            <label for="notes" className="label-req">Link</label>
            <textarea id="eval" name="notes" placeholder="Paste link here"></textarea>
        </div>
        <div className="form-group-req">
            <label for="notes" className="label-req">Software Request</label>
            <textarea id="eval" name="notes" placeholder="Software"></textarea>
        </div>

        <button type="submit" id="sub-btn">Submit Request</button>
    </form>
</div>

</div>


);

}

export default SoftwareRequest;

