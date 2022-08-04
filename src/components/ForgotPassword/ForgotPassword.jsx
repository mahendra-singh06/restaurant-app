/* eslint-disable no-throw-literal */
import React from "react";
import LoginPageVideo from "../LoginPageVideo/LoginPageVideo";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

function ForgotPassword() {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="osahan-signup login-page">
          <>
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
                  <h2>Forgot password</h2>
                  <p>
                    Enter your email address below and we'll send you an email
                    with instructions on how to change your password
                  </p>
                  <form action="login.html" className="mt-5 mb-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleChange}
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="new-acc d-flex align-items-center justify-content-center">
                  <Link to="/signin">
                    <p className="text-center m-0">
                      Already an account? Sign in
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </>
      </div>
    </>
  );
}

export default ForgotPassword;
