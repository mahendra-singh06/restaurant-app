import React from 'react';
import {Link} from "react-router-dom";
import SidebarMenu from '../Navbar/SidebarMenu';

function Footer() {
  return (
    <>
        {/* <!-- footer --> */}
    <footer className="section-footer border-top bg-dark">
        <div className="container">
            <section className="footer-top padding-y py-5">
                <div className="row pt-3">
                    <aside className="col-md-4 footer-about">
                        <article className="d-flex pb-3">
                            <div>
                                <img alt="#" src="img/logo_web.png" className="logo-footer mr-3" />

                                </div>
                            <div>
                                <h6 className="title text-white">About Us</h6>
                                <p className="text-muted">Some short text about company like You might remember the Dell computer commercials in which a youth reports.</p>
                                <div className="d-flex align-items-center">
                                    <Link className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Facebook" target="_blank" to="/home"><i className="feather-facebook"></i></Link>
                                    <Link className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Instagram" target="_blank" to="/home"><i className="feather-instagram"></i></Link>
                                    <Link className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Youtube" target="_blank" to="/home"><i className="feather-youtube"></i></Link>
                                    <Link className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Twitter" target="_blank" to="/home"><i className="feather-twitter"></i></Link>
                                </div>
                            </div>
                        </article>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">Error Pages</h6>
                        <ul className="list-unstyled hov_footer">
                            <li> <a href="not-found.html" className="text-muted">Not found</a></li>
                            <li> <a href="maintence.html" className="text-muted">Maintence</a></li>
                            <li> <a href="coming-soon.html" className="text-muted">Coming Soon</a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">Services</h6>
                        <ul className="list-unstyled hov_footer">
                            <li> <a href="faq.html" className="text-muted">Delivery Support</a></li>
                            <li> <a href="contact-us.html" className="text-muted">Contact Us</a></li>
                            <li> <a href="terms.html" className="text-muted">Terms of use</a></li>
                            <li> <a href="privacy.html" className="text-muted">Privacy policy</a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3  col-md-2 text-white">
                        <h6 className="title">For users</h6>
                        <ul className="list-unstyled hov_footer">
                            <li> <a href="login.html" className="text-muted"> User Login </a></li>
                            <li> <a href="signup.html" className="text-muted"> User register </a></li>
                            <li> <a href="forgot_password.html" className="text-muted"> Forgot Password </a></li>
                            <li> <a href="profile.html" className="text-muted"> Account Setting </a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3  col-md-2 text-white">
                        <h6 className="title">More Pages</h6>
                        <ul className="list-unstyled hov_footer">
                            <li> <a href="trending.html" className="text-muted"> Trending </a></li>
                            <li> <a href="most_popular.html" className="text-muted"> Most popular </a></li>
                            <li> <a href="restaurant.html" className="text-muted"> Restaurant Details </a></li>
                            <li> <a href="favorites.html" className="text-muted"> Favorites </a></li>
                        </ul>
                    </aside>
                </div>
                {/* <!-- row.// --> */}
            </section>
            {/* <!-- footer-top.// --> */}
            <section className="footer-center border-top padding-y py-5">
                <h6 className="title text-white">Countries</h6>
                <div className="row">
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">India</Link></li>
                            <li> <Link to="#" className="text-muted">Indonesia</Link></li>
                            <li> <Link to="#" className="text-muted">Ireland</Link></li>
                            <li> <Link to="#" className="text-muted">Italy</Link></li>
                            <li> <Link to="#" className="text-muted">Lebanon</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">Malaysia</Link></li>
                            <li> <Link to="#" className="text-muted">New Zealand</Link></li>
                            <li> <Link to="#" className="text-muted">Philippines</Link></li>
                            <li> <Link to="#" className="text-muted">Poland</Link></li>
                            <li> <Link to="#" className="text-muted">Portugal</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">Australia</Link></li>
                            <li> <Link to="#" className="text-muted">Brasil</Link></li>
                            <li> <Link to="#" className="text-muted">Canada</Link></li>
                            <li> <Link to="#" className="text-muted">Chile</Link></li>
                            <li> <Link to="#" className="text-muted">Czech Republic</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">Turkey</Link></li>
                            <li> <Link to="#" className="text-muted">UAE</Link></li>
                            <li> <Link to="#" className="text-muted">United Kingdom</Link></li>
                            <li> <Link to="#" className="text-muted">United States</Link></li>
                            <li> <Link to="#" className="text-muted">Sri Lanka</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">Qatar</Link></li>
                            <li> <Link to="#" className="text-muted">Singapore</Link></li>
                            <li> <Link to="#" className="text-muted">Slovakia</Link></li>
                            <li> <Link to="#" className="text-muted">South Africa</Link></li>
                            <li> <Link to="#" className="text-muted">Green Land</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-2 col-md-2 text-white">
                        <ul className="list-unstyled hov_footer">
                            <li> <Link to="#" className="text-muted">Pakistan</Link></li>
                            <li> <Link to="#" className="text-muted">Bangladesh</Link></li>
                            <li> <Link to="#" className="text-muted">Bhutaan</Link></li>
                            <li> <Link to="#" className="text-muted">Nepal</Link></li>
                        </ul>
                    </aside>
                </div>
                {/* <!-- row.// --> */}
            </section>
        </div>
        {/* <!-- //container --> */}
        <section className="footer-copyright border-top py-3 bg-light">
            <div className="container d-flex align-items-center">
                <p className="mb-0"> © 2020 Company All rights reserved </p>
                <p className="text-muted mb-0 ml-auto d-flex align-items-center">
                    <Link to="#" className="d-block"><img alt="#" src="img/appstore.png" height="40" /></Link>
                    <Link to="#" className="d-block ml-3"><img alt="#" src="img/playmarket.png" height="40" /></Link>
                </p>
            </div>
        </section>
    </footer>
    <SidebarMenu />
    </>
  )
}

export default Footer;