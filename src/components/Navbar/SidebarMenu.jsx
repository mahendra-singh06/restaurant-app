import React from "react";
import "./SidebarMenu.css";
import { Link } from "react-router-dom";
import "../../App.css";


const SidebarMenu = (props) => {
  return (
    <>
      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <Link to="/home">
              <i className="feather-home mr-2"></i> Homepage
            </Link>
          </li>
          <li>
            <Link to="/my_order">
              <i className="feather-list mr-2"></i> My Orders
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="feather-edit-2 mr-2"></i> Authentication
            </Link>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/forgotpassword">Forgot Password</Link>
              </li>
              <li>
                <Link to="/verification">Verification</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/favorites">
              <i className="feather-heart mr-2"></i> Favorites
            </Link>
          </li>
          <li>
            <Link to="/trending">
              <i className="feather-trending-up mr-2"></i> Trending
            </Link>
          </li>
          <li>
            <Link to="/most_popular">
              <i className="feather-award mr-2"></i> Most Popular
            </Link>
          </li>
          <li>
            <Link to="/restaurant">
              <i className="feather-paperclip mr-2"></i> Restaurant Detail
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <i className="feather-list mr-2"></i> Checkout
            </Link>
          </li>
          <li>
            <Link to="/successful">
              <i className="feather-check-circle mr-2"></i> Successful
            </Link>
          </li>
          <li>
            <Link to="/map">
              <i className="feather-map-pin mr-2"></i> Live Map
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="feather-user mr-2"></i> Profile
            </Link>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/favorites">Delivery support</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms">Terms of use</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              <i className="feather-alert-triangle mr-2"></i> Error
            </Link>
            <ul>
              <li>
                <Link to="/not-found">Not Found</Link>
              </li>
              <li>
                <Link to="/maintence"> Maintence</Link>
              </li>
              <li>
                <Link to="/coming-soon">Coming Soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              <i className="feather-link mr-2"></i> Navigation Link Example
            </Link>
            <ul>
              <li>
                <Link to="#">Link Example 1</Link>
                <ul>
                  <li>
                    <Link to="#">Link Example 1.1</Link>
                    <ul>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Link Example 1.2</Link>
                    <ul>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                      <li>
                        <Link to="#">Link</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Link Example 2</Link>
              </li>
              <li>
                <Link to="#">Link Example 3</Link>
              </li>
              <li>
                <Link to="#">Link Example 4</Link>
              </li>
              <li data-nav-custom-content>
                <div className="custom-message">
                  You can add any custom content to your navigation items. This
                  text is just an example.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <Link className="text-danger" to="/home">
              <p className="h5 m-0">
                <i className="feather-home text-danger"></i>
              </p>
              Home
            </Link>
          </li>
          <li className="github">
            <Link to="/faq">
              <p className="h5 m-0">
                <i className="feather-message-circle"></i>
              </p>
              FAQ
            </Link>
          </li>
          <li className="ko-fi">
            <Link to="/contact-us">
              <p className="h5 m-0">
                <i className="feather-phone"></i>
              </p>
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;
