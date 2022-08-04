import React,{useEffect, useContext} from "react";
import LoginPageVideo from "../LoginPageVideo/LoginPageVideo";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import {useCookies} from "react-cookie";
import {objectAccess} from "../Context"


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cookies, setCookie] = useCookies(['user']);
 
  const {title,paragraph,forgotpara,forgottitle} = useContext(objectAccess);
  
  const handleCookie = () => {
    setCookie('Email', email, { path: '/' });
    setCookie('Password', password, { path: '/' });
 };
 
  const handleChange=()=>{
      navigate("/home")
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  useEffect(()=>{
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  },[email, password])



console.log(email,password)

  return (
    <>
      <div className="login-page vh-100">
        <LoginPageVideo
          para=" Your browser does not support the video tag."
          src={"img/bg.mp4"}
          type={"video/mp4"}
          src1={"img/bg.mp4"}
          type1={"video/ogg"}
        />
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="px-5 col-md-6 ml-auto">
            <div className="px-5 col-10 mx-auto">
              <h2 className="text-dark my-0">{title}</h2>
              <p className="text-50">{paragraph}</p>
              <form className="mt-5 mb-4" action="" onSubmit = {handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    defaultChecked={true}
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
                    defaultChecked={true}
                  />
                  
                </div>
                <div className="btn btn-primary btn-lg btn-block" onClick={()=>{handleChange();handleCookie()}}  >
                  SIGN IN
                </div>
              </form>
              <Link to="/forgotpassword" className="text-decoration-none">
                <p className="text-center">{forgottitle}</p>
              </Link>

              <div className="d-flex align-items-center justify-content-center">
                <Link to="/signup">
                  <p className="text-center m-0">
                    {forgotpara}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
