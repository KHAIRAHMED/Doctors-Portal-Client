import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <section className="footer-section">
            <div className="d-flex justify-content-center">
                <div className="row w-75   ">
                    <div className="col-md-3 text-secondary ">
                        <h3 style={{ color: "#1CC7C1" }}>Treatement</h3>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>

                    </div>
                    <div className="col-md-3 text-secondary">
                        <h3 style={{ color: "#1CC7C1" }}>Services</h3>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                    </div>
                    <div className="col-md-3 text-secondary">
                        <h3 style={{ color: "#1CC7C1" }}>Our Health</h3>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                        <p>Treathment And Pattient</p>
                        <p>Check Up</p>
                    </div>
                    <div className="col-md-3 text-secondary">
                        <h3 style={{ color: "#1CC7C1" }}>Our Address</h3>
                        <p>Bangladesh , Chittagong , Feni</p>
                        <p>Treathment And Pattient</p>
                        <div style={{display:"flex"}}>
                        <p className="icon-section">
                                <Link to="/">
                                    <FontAwesomeIcon className="fontIcon" icon={faFacebookF}></FontAwesomeIcon>
                                </Link>
                            </p>
                            <p className="icon-section">
                                <Link to="/">
                                    <FontAwesomeIcon className="fontIcon" icon={faGooglePlusG}></FontAwesomeIcon>
                                </Link>
                            </p>
                            <p className="icon-section">
                                <Link to="/">
                                    <FontAwesomeIcon className="fontIcon" icon={faTwitter}></FontAwesomeIcon>
                                </Link>
                            </p>
                        </div>
                        <p>Call Now</p>
                        <button className="btn btn-primary">01833994508</button>
                    </div>
                </div>
            </div>


            <div className="text-center my-5">
                <p className="text-secondary">
                    Copyright {(new Date()).getFullYear()} all Rights Reserved
                </p>

            </div>
        </section>
    );
};

export default Footer;