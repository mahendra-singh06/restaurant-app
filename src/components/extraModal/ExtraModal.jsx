import React from "react";
import "../../App.css";

function ExtraModal({closeModal}) {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {/* <div
        className="modal fade"
        id="extras"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      > */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Extras</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={()=> closeModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* <!-- extras body --> */}
                <div className="recepie-body">
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio1f"
                      name="location"
                      className="custom-control-input"
                      checked
                    />
                    <label className="custom-control-label" for="customRadio1f">
                      Tuna <span className="text-muted">+$35.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio2f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio2f">
                      Salmon <span className="text-muted">+$20.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio3f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio3f">
                      Wasabi <span className="text-muted">+$25.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio4f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio4f">
                      Unagi <span className="text-muted">+$10.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio5f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio5f">
                      Vegetables <span className="text-muted">+$5.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio6f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio6f">
                      Noodles <span className="text-muted">+$30.00</span>
                    </label>
                  </div>
                  <h6 className="font-weight-bold mt-4">QUANTITY</h6>
                  <div className="d-flex align-items-center">
                    <p className="m-0">{count} Item</p>
                    <div className="ml-auto">
                      <span className="count-number">
                        <button
                          type="button"
                          className="btn-sm left dec btn btn-outline-secondary"
                        >
                          <i
                            className="feather-minus"
                            onClick={(e) => setCount(count - 1)}
                          ></i>
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          readonly=""
                          value={count}
                        />
                        <button
                          type="button"
                          className="btn-sm right inc btn btn-outline-secondary"
                        >
                          <i
                            className="feather-plus"
                            onClick={(e) => setCount(count + 1)}
                          ></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button
                  type="button"
                  className="btn border-top btn-lg btn-block"
                  data-dismiss="modal"
                  onClick={()=> closeModal(false)}
                >
                  Close
                </button>
              </div>
              <div className="col-6 m-0 p-0">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default ExtraModal;
