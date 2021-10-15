import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div style={{boxShadow: '-2px -2px 10px black'}} className="d-flex justify-content-center bg-footer text-light">
                <div className="mt-5 d-flex">
                    <div className="mx-3">
                        <ul className="p-0" style={{color: 'gray', listStyle: 'none'}}>
                                <li>
                                    <Link className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/about"><span className="hov-link">About us</span></Link>
                                </li>

                                <li>
                                    <Link className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/services"><span className="hov-link">Services</span></Link>
                                </li>

                                <li>
                                    <Link className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/contact"><span className="hov-link">Contact us</span></Link>
                                </li>
                            </ul>
                    </div>

                    <div className="mx-5">
                        <div className="d-flex justify-content-center">
                            <img height="38" width="38" src="./logo/logo.svg" alt="logo" />
                            <span className="fs-5">Codatory</span>
                        </div>
                            <div className="mt-3 text-light d-flex justify-content-center">
                                <a href="https://www.facebook.com"><i className="mx-2 fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.linkedin.com"><i className="mx-2 fa-brands fa-linkedin-in"></i></a>
                                <a href="https://twitter.com"><i class="mx-2 fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com"><i class="mx-2 fa-brands fa-instagram"></i></a>
                                <a href="https://www.youtube.com"><i class="mx-2 fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="mx-3">
                        <ul className="p-0" style={{color: 'gray', listStyle: 'none', textDecoration: 'none'}}>
                            <li>
                                <Link className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/services">
                                <span className="hov-link">Become a Learner</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="hov-link" style={{color: 'gray', textDecoration: 'none'}} to="/contact">
                                <span className="hov-link">Become an Instructor</span>
                                </Link>        
                            </li>
                            <li className="hov-link" style={{cursor: 'pointer'}}>
                            <span className="hov-link">Terms and conditions</span>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bg-footer">
                <p className="text-secondary text-center pt-4 pb-3 my-0">All Rights Reserved &copy; Codatory</p>
            </div>
        </div>
    )
}

export default Footer;