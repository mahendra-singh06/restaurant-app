import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Header() {

  return (
    <>
      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <Link className="toggle togglew toggle-2" to="#">
            <span></span>
          </Link>
          <h4 className="font-weight-bold m-0 text-white">Osahan Bar</h4>
        </div>
      </div>
      <div className="offer-section py-4">
        <div className="container position-relative">
          <img alt="#" src="img/trending1.png" className="restaurant-pic" />
          <div className="pt-3 text-white">
            <h2 className="font-weight-bold">Conrad Chicago Restaurant</h2>
            <p className="text-white m-0">963 Madyson Drive Suite 679</p>
            <div className="rating-wrap d-flex align-items-center mt-2">
              <ul className="rating-stars list-unstyled">
                <li>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star"></i>
                </li>
              </ul>
              <p className="label-rating text-white ml-2 small">
                (245 Reviews)
              </p>
            </div>
          </div>
          <div className="pb-4">
            <div className="row">
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                  Delivery
                </p>
                <p className="text-white m-0">Free</p>
              </div>
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                  Open time
                </p>
                <p className="text-white m-0">8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-3 bg-primary bg-primary mt-n3 rounded position-relative">
          <div className="d-flex align-items-center">
            <div className="feather_icon">
              <Link
                to="#ratings-and-reviews"
                className="text-decoration-none text-dark"
              >
                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload"></i>
              </Link>
              <Link
                to="#ratings-and-reviews"
                className="text-decoration-none text-dark mx-2"
              >
                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-star"></i>
              </Link>
              <Link
                to="#ratings-and-reviews"
                className="text-decoration-none text-dark"
              >
                <i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin"></i>
              </Link>
            </div>
            <Link
              to="contact-us.html"
              className="btn btn-sm btn-outline-light ml-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <p className="font-weight-bold pt-4 m-0">FEATURED ITEMS</p>
          {/* <!-- slider --> */}
          
          <div className="trending-slider rounded">
          <i className="fa-solid fa-chevron-left "
               style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                marginTop: "65px",
              }}
          ></i>
            <div className="osahan-slider-item "> 
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image ">
                  <Link to="/checkout">
                    <img
                      alt="#"
                      src="img/trending1.png"
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/checkout" className="text-black">
                        Famous Dave's Bar-B-Que
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">
                      Vegetarian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">          
                      <span className="text-black-50"> $350 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image slide">
                  <Link to="/checkout">
                    <img
                      alt="#"
                      src="img/trending2.png"
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/checkout" className="text-black">
                        Thai Famous Cuisine
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image slide">
                  <Link to="/checkout">
                    <img
                      alt="#"
                      src="img/trending3.png"
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/checkout" className="text-black">
                        The osahan Restaurant
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">
                      North • Hamburgers • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      <span className="text-black-50"> $500 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image slide">
                  <Link to="/checkout">
                    <img
                      alt="#"
                      src="img/trending2.png"
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/checkout" className="text-black">
                        Thai Famous Cuisine
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <i className="fa-solid fa-chevron-right " 
                style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                marginTop: "65px",
              }}
              ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
