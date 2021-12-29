import React from 'react';
import "./ContactFrom.css"
const ContactFrom = () => {
    return (
        <section className="contactFrom-section text-center mb-5">
            <div className="py-4">
                <h3 style={{ color: "#11D0DD" }}>CONTACT US</h3>
                <h2 className="text-white">Always Contact With us</h2>
            </div>
          <div className="d-flex justify-content-center">
          <form className="w-75">
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email Address*" />

                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject*" />
                </div>
                <div className="mb-3">
                    <textarea class="form-control" rows="6" placeholder="Your Message*"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
    );
};

export default ContactFrom;