import React from 'react';
import "./About.css"
import img from "../../../../img/about.png"

const About = () => {
    return (
        
        <div class="row bg-color py-4 ">
            <h1 className="text-white fs-1">About Me</h1>
    <div class="col-sm-6">
    <img className="img-fluid" src={img} alt="" />
    </div>
    <div class="col-sm-6 text-white">
    <h1 className="h2-about">Akaeid Al Akib </h1>
      <p className="fs-5">Full Stack Web developer with experience using React, JavaScript, Node.js, Express.js, MongoDB, and mobile responsive development. My ability is to research and quickly learn new skills and technologies that make me well for the web development world, and it is that's what I love most about code. I love challenging myself to learn new things. The life long learning associated with programming consistently provides me with the joy I get from mastering a new skill.</p>
      <button className="resume-btn"> <a href="https://drive.google.com/file/d/159csmw22CU4NGgHMKEs8o4xotMafZ6fN/view" className="link-primary nav-link text-white" target="_blank" rel="noreferrer">Resume</a></button>
    </div>
  </div>
    );
};

export default About;