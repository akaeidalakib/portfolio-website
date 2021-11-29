import React from 'react';
import "./Projects.css"
import project1 from "../../../img/project1.jpg"
const Projects = () => {
    return (
        <div className="project-bg p-3">
<h1 className="h2-about">Projects </h1>
<div data-aos="zoom-out-down" className="row row-cols-1 row-cols-md-3 g-4">
  <div data-aos="zoom-out-down" className="col">
    <div className="card h-100 p-2">
      <img src={project1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">honda-cbr-bootstrap-akaeidalakib</h5>
        <p className="card-text">It pulls smartly from idle and the power delivery is very beginner friendly with a long torque curve. The larger displacement and corresponding power bump in this CB300R is a notable improvement to the merely adequate power in the CBR250R</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div data-aos="zoom-out-down" className="col">
    <div className="card h-100 p-2">
      <img src={project1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div data-aos="zoom-out-down" className="col">
    <div className="card h-100 p-2">
      <img src={project1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects;