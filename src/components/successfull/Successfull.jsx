import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import {objectAccess} from "../Context";


function Successfull() {

    const {objectSuccessfull} = useContext(objectAccess);
  return (
    <>
       <Navbar />

         <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
            <Link className="toggle togglew toggle-2" to="#"><span></span></Link>
            <h4 className="font-weight-bold m-0 text-white">Thanks :)</h4>
        </div>
    </div>
    <div className="py-5 osahan-coming-soon d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className="text-center pb-3">
                <h1 className="font-weight-bold">{objectSuccessfull.title}</h1>
                <p>{objectSuccessfull.paragraph}<a href="my_order.html" className="font-weight-bold text-decoration-none text-primary">My Orders</a> about next steps information.</p>
            </div>
            {/* <!-- continue --> */}
            <div className="bg-white rounded text-center p-4 shadow-sm">
                <h1 className="display-1 mb-4">🎉</h1>
                <h6 className="font-weight-bold mb-2">Preparing your order</h6>
                <p className="small text-muted">Your order will be prepared and will come soon</p>
                <a href="status_onprocess.html" className="btn rounded btn-primary btn-lg btn-block">Track My Order</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Successfull;