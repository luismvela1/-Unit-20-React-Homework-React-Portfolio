import React from "react";
//import Git from './GitHub_logo';
import './AboutMe.css';
const AboutMe = () => (
  <div>
    <h1 className ="about">ABOUT ME</h1>
    <div>
    <img src = {"https://avatars1.githubusercontent.com/u/69739769?s=400&u=8d1c627214cdc68826cab2d4c3cf9bcf20cd053f&v=4"} alt = "profile shot" className= "pic"/>
    </div>
    <div>
    <p>
    Hello world, my name is Luis Vela, I was born and raised in san Antonio, Texas. I attended Fox Tech high school, where I graduated with honors and ranked in the top ten of my class. Right out of high school, I attended san Antonio college, where I completed my basic which I later used to transfer to a two-year technical college. Growing up I was always getting in trouble for taking thing apart to see how they worked, Electronics where always on my list of favorites to disassemble. I was always fascinated by electronics so naturally a degree in this area made sense. After I made my decision on what to study, I decided to attended Hallmark College where I received my Associates degree in electrical engineering. Coming out of school, I landed a job with a company that specialized in designing and building custom control panels for industrial applications.
After spending 15 years of my life as a electrical control panel builder, I decided it was time for a change. Don’t get me wrong, I accomplished a lot and I am proud to be able to say that my work is out of this world, literally out of this world, but I felt that my time was up and I decided to pursue a career in web developing. With this bootcamp I will have the tools to expand my knowledge and have the ability to land a job as a full stack web developer. I’m excited to see what the future holds for me, but until then, let the games begin.
    </p>
    </div>
    <div>
    <h1 className="avitar">CONNECT WITH ME</h1>
    </div>
    <p>LUIS VELA</p>
    <p>EMAIL ADRESS: luismvela1@aol.com</p>
    <p>PHONE NUMBER: 210-954-3154</p>
    <a className= "link" href={process.env.PUBLIC_URL + '/images/luisVelasResumeUpdated2.docx'}>Resume</a>

    <a className="link"href={"https://github.com/luismvela1?tab=repositories"}>github</a>

    <a className="link" href={"https://www.linkedin.com/in/luis-vela-2020?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUiwSQjWGTQaIF9NDZt0Z9g%3D%3D"}>linkedin</a>
  </div>
  
);

export default AboutMe;