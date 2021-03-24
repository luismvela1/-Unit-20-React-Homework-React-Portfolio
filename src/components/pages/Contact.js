import React from "react";
//import Github from '/src/public/images/GitHub_logo';

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>Luis Vela</p>
    <p>EMAIL ADRESS: luismvela1@aol.com</p>
    <p>PHONE NUMBER: 210-954-3154</p>
    <a href={"https://github.com/luismvela1?tab=repositories"}>github</a>
    <br></br>
    <a href={"https://www.linkedin.com/in/luis-vela-2020?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUiwSQjWGTQaIF9NDZt0Z9g%3D%3D"}>linkedin</a>
       <br></br>
       <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="Name" className="form-control" id="exampleInputName1"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
  </div>
);

export default Contact;
