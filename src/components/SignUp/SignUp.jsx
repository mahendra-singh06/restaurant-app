import React, {useContext, useEffect} from "react";
import LoginPageVideo from "../LoginPageVideo/LoginPageVideo";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import {objectAccess} from "../Context";

function SignUp() {

  const {objectSignUp} = useContext(objectAccess);

const [name, setName] = React.useState();
const [password, setPassword] = React.useState();
const [mobileNumber, setMobileNumber] = React.useState();

const navigate = useNavigate();

const handleSubmit = (e) =>{
  e.preventDefault();
}

const handleChange=()=>{
  navigate("/signin")
}

useEffect(()=>{
  localStorage.setItem("email", JSON.stringify(name));
  localStorage.setItem("password", JSON.stringify(password));
  localStorage.setItem("mobile Number", JSON.stringify(mobileNumber));
},[name, mobileNumber, password]);

  return (
    <>
      <div className="osahan-signup login-page">
        <LoginPageVideo
          para=" Your browser does not support the video tag."
          src={"img/bg.mp4"}
          type={"video/mp4"}
          src1={"img/bg.mp4"}
          type1={"video/ogg"}
        />

        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <div className="px-5 col-md-6 ml-auto">
            <div className="px-5 col-10 mx-auto">
              <h2 className="text-dark my-0">{objectSignUp.title}.</h2>
              <p className="text-50">{objectSignUp.paragraph}</p>
              <form className="mt-5 mb-4" action="" onSubmit = {handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputName1" className="text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputNumber1" className="text-dark">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Mobile"
                    className="form-control"
                    id="exampleInputNumber1"
                    aria-describedby="numberHelp"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    value={mobileNumber}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block" onClick={handleChange}>
                  SIGN UP
                </button>
                <div className="py-2">
                  <button className="btn btn-facebook btn-lg btn-block">
                    <i className="feather-facebook"></i> Connect with Facebook
                  </button>
                </div>
              </form>
            </div>
            <div className="new-acc d-flex align-items-center justify-content-center">
              <Link to="/signin">
                        <p className="text-center m-0">{objectSignUp.forgotpara}</p>
                </Link>  
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
