import React from "react";
import { Link } from "react-router-dom";
import AddDeliveryAddressModal from "../checkout/AddDeliveryAddressModal";

function Checkout() {
 const [show, setShow] = React.useState(false);
  return (
    <div>
       {show && <AddDeliveryAddressModal closeModal={setShow}/>}
      <div className="container position-relative">
        <div className="py-5 row">
          <div className="col-md-8 mb-3">
            <div>
              <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
                <div className="osahan-cart-item-profile bg-white p-3">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 font-weight-bold">Delivery Address</h6>
                    <div className="row">
                      <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                        <input
                          type="radio"
                          id="customRadioInline1"
                          name="customRadioInline1"
                          className="custom-control-input"
                          checked
                        />
                        <label
                          className="custom-control-label w-100"
                          for="customRadioInline1"
                        >
                          <div>
                            <div className="p-3 bg-white rounded shadow-sm w-100">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="mb-0">Home</h6>
                                <p className="mb-0 badge badge-success ml-auto">
                                  <i className="icofont-check-circled"></i>
                                  Default
                                </p>
                              </div>
                              <p className="small text-muted m-0">
                                1001 Veterans Blvd
                              </p>
                              <p className="small text-muted m-0">
                                Redwood City, CA 94063
                              </p>
                            </div>
                            <Link
                              to="#"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              className="btn btn-block btn-light border-top"
                              onClick={()=> setShow(true)}
                            >
                              Edit
                            </Link>
                          </div>
                        </label>
                      </div>
                      <div className="custom-control col-lg-6 custom-radio position-relative border-custom-radio">
                        <input
                          type="radio"
                          id="customRadioInline2"
                          name="customRadioInline1"
                          className="custom-control-input"
                        />
                        <label
                          className="custom-control-label w-100"
                          for="customRadioInline2"
                        >
                          <div>
                            <div className="p-3 rounded bg-white shadow-sm w-100">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="mb-0">Work</h6>
                                <p className="mb-0 badge badge-light ml-auto">
                                  <i className="icofont-check-circled"></i>{" "}
                                  Select
                                </p>
                              </div>
                              <p className="small text-muted m-0">
                                Model Town, Ludhiana
                              </p>
                              <p className="small text-muted m-0">
                                Punjab 141002, India
                              </p>
                            </div>
                            <Link
                              to="#"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              className="btn btn-block btn-light border-top"
                              onClick={()=> setShow(true)}
                            >
                              Edit
                            </Link>
                          </div>
                        </label>
                      </div>
                    </div>
                    <Link
                      className="btn btn-primary"
                      to="#"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      ADD NEW ADDRESS
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
                id="accordionExample"
              >
                <div className="osahan-card bg-white border-bottom overflow-hidden">
                  <div className="osahan-card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="d-flex p-3 align-items-center btn btn-link w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="feather-credit-card mr-3"></i>{" "}
                        Credit/Debit Card
                        <i className="feather-chevron-down ml-auto"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="osahan-card-body border-top p-3">
                      <h6 className="m-0">Add new card</h6>
                      <p className="small">
                        WE ACCEPT{" "}
                        <span className="osahan-card ml-2 font-weight-bold">
                          ( Master Card / Visa Card / Rupay )
                        </span>
                      </p>
                      <form>
                        <div className="form-row">
                          <div className="col-md-12 form-group">
                            <label className="form-label font-weight-bold small">
                              Card number
                            </label>
                            <div className="input-group">
                              <input
                                placeholder="Card number"
                                type="number"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="feather-credit-card"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8 form-group">
                            <label className="form-label font-weight-bold small">
                              Valid through(MM/YY)
                            </label>
                            <input
                              placeholder="Enter Valid through(MM/YY)"
                              type="number"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 form-group">
                            <label className="form-label font-weight-bold small">
                              CVV
                            </label>
                            <input
                              placeholder="Enter CVV Number"
                              type="number"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-12 form-group">
                            <label className="form-label font-weight-bold small">
                              Name on card
                            </label>
                            <input
                              placeholder="Enter Card number"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-12 form-group mb-0">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="custom-checkbox1"
                                className="custom-control-input"
                              />
                              <label
                                title=""
                                type="checkbox"
                                for="custom-checkbox1"
                                className="custom-control-label small pt-1"
                              >
                                Securely save this card for a faster checkout
                                next time.
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="osahan-card bg-white border-bottom overflow-hidden">
                  <div className="osahan-card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="d-flex p-3 align-items-center btn btn-link w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="feather-globe mr-3"></i> Net Banking
                        <i className="feather-chevron-down ml-auto"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="osahan-card-body border-top p-3">
                      <form>
                        <div
                          className="btn-group btn-group-toggle w-100"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-outline-secondary active">
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              checked
                            />{" "}
                            HDFC
                          </label>
                          <label className="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option2" />{" "}
                            ICICI
                          </label>
                          <label className="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option3" />{" "}
                            AXIS
                          </label>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                          <div className="col-md-12 form-group mb-0">
                            <label className="form-label small font-weight-bold">
                              Select Bank
                            </label>
                            <br></br>
                            <select className="custom-select form-control">
                              <option>Bank</option>
                              <option>KOTAK</option>
                              <option>SBI</option>
                              <option>UCO</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="osahan-card bg-white overflow-hidden">
                  <div className="osahan-card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="d-flex p-3 align-items-center btn btn-link w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="feather-dollar-sign mr-3"></i> Cash on
                        Delivery
                        <i className="feather-chevron-down ml-auto"></i>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body border-top">
                      <h6 className="mb-3 mt-0 mb-3 font-weight-bold">Cash</h6>
                      <p className="m-0">
                        Please keep exact change handy to help us serve you
                        better
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
