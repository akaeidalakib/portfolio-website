import React from 'react';
import "./Header.css"
import hero from "../../../../img/hero.png"
const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light text-white">
  <div className="container-fluid d-flex justify-content-between">
      <div>
      <a className="navbar-brand" href="#">Akaeid Al Akib</a>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
      
    
    <div className="collapse navbar-collapse mx-5" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    <div>
    <button className="resume-btn"><a href="https://drive.google.com/file/d/159csmw22CU4NGgHMKEs8o4xotMafZ6fN/view" className="link-primary nav-link text-white" target="_blank" rel="noreferrer">Resume</a></button>
      </div>
    </div>
  </div>
</nav>
<div className="row wpo-hero-style-2 pt-5">
    <div className="col-sm-8">
    <div className="d-flex align-items-center mt-5">
                    <div className="ms-5">
                    <h1 className="name-h1">I’m <span id="name-title" className="mx-1"> Akaeid  Al Akib</span></h1>
                   <h3 className="text-start text-white fs-2">Full Stack Web developer</h3>
                   <div className="text-start text-white fs-2">
                            <i className=" m-2 p-2 rounded-3 fab fa-linkedin-in border border-primary"></i>
                            <i className=" m-2 p-2 rounded-3 fab fa-github-alt border border-primary"></i>
                            <i className=" m-2 p-2 rounded-3 fab fa-facebook-f border border-primary"></i>
                   </div>
                    </div>
                    
                </div>
    </div>
    <div className="col-sm-4"><img className="img-size" src={hero} alt="" /></div>
  </div>
</>
    );
};

export default Header;