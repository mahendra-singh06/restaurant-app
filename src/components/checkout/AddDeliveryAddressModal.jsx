import React, {useEffect} from "react";
import "../../App.css";

const AddDeliveryAddressModal = ({ closeModal }) => {
  const [area, setArea] = React.useState();
  const [address, setAddress] = React.useState();
  const [instruction, setInstruction] = React.useState();

  const onClick = (e) => {
    e.preventDefault();
    localStorage.setItem("area", JSON.stringify(area));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("instruction", JSON.stringify(instruction));
    setArea('');
    setAddress('');
    setInstruction('');
    console.log(`${area}:area, ${address}:address, ${instruction}:instruction`);
  };

  useEffect(()=>{
    const area = JSON.parse(localStorage.getItem('area'))
    const address = JSON.parse(localStorage.getItem('address'))
    const instruction = JSON.parse(localStorage.getItem('instruction'))
    if(area){
      setArea(area)
    }if(address){
      setAddress(address)
    }if(instruction){
      setInstruction(instruction)
    }
  },[]);

  return (
    <>
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      > */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Delivery Address</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="" >
              <div className="form-row">
                <div className="col-md-12 form-group">
                  <label className="form-label">Delivery Area</label>
                  <div className="input-group">
                    <input
                      placeholder="Delivery Area"
                      type="text"
                      className="form-control"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />

                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="feather-map-pin"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <label className="form-label">Complete Address</label>
                  <input
                    placeholder="Complete Address e.g. house number, street name, landmark"
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-md-12 form-group">
                  <label className="form-label">Delivery Instructions</label>
                  <input
                    placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                    type="text"
                    className="form-control"
                    value={instruction}
                    onChange={(e) => setInstruction(e.target.value)}
                  />
                </div>
                <div className="mb-0 col-md-12 form-group">
                  <label className="form-label">Nickname</label>
                  <div
                    className="btn-group btn-group-toggle w-100"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-outline-secondary active">
                      <input
                        type="radio"
                        name="options"
                        id="option12"
                        checked
                      />
                      Home
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option22" /> Work
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option32" /> Other
                    </label>
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
                onClick={() => closeModal(false)}
              >
                Close
              </button>
            </div>
            <div className="col-6 m-0 p-0">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={onClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddDeliveryAddressModal;
