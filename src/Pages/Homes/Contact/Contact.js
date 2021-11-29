import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="row contact-body">
            <h1 className=" text-center text-white fs-1 p-3">Let's Talks</h1>
            <div className="col-8">
            <div className="wrapper rounded d-flex align-items-stretch">
    <div className="bg-yellow">
        <div className="text-white"> <span className="far fa-envelope"></span> </div>
        <div className="pt-5 cursive"> Please describe your product idea in a nutshell </div>
        <div className="pt-sm-5 pt-5 cursive mt-sm-5"> We need your email to reach you back </div>
    </div>
    <div className="contact-form">
        <div className="h3">Hire Me</div>
        <form action="https://formsubmit.co/akaeid786@gmail.com" method="POST">
            <div className="form-group pt-3"> <label for="message">Message</label> <textarea name="message" className="form-control" required></textarea> </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3"> <label for="name">Your Name</label> <input type="text" name="name" className="form-control" required /> </div>
                <div className="form-group pt-lg-2 pt-3"> <label for="name">Your Email</label> <input type="email" name="email" className="form-control" required /> </div>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                <div type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"> Submit </div>
            </div>
        </form>
    </div>
</div> 
<div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">Thank You <span className="fas fa-heart"></span> </h5> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="ps-2">Thank You for sharing your views with us. We will get back to you as soon as possible.</div>
            </div>
        </div>
    </div>
</div>
            </div>
    <div className="col-4"></div>
  </div>
    );
};

export default Contact;

