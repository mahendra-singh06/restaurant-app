import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Successfull from "./components/successfull/Successfull"; 
import Payment from "./components/payment/Payment";
import Location from "./components/location/Location";
import Verification from "./components/verification/Verification";
import { objectAccess } from "./components/Context";


const objectSignIn = {
  title: "Welcome Back",
  paragraph: "sign in to continue",
  forgottitle: "Forgot your password?",
  forgotpara: "Don't have an account? Sign up",
};


const objectSignUp = {
  title: "Hello There",
  paragraph: "sign up to continue",
  forgotpara: "Already an account? Sign in",
};

const objectSuccessfull = {
  title:"Osahan, Your order has been successful",
  paragraph:"Check your order status in " 
}


function App() {
  return (
    <div className="App">
      <objectAccess.Provider value={{objectSignUp,objectSignIn,objectSuccessfull}}>
      <Routes>
        <Route path="/" element={<SignIn  />}>
          <Route path="/signin" element={<SignIn  />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/successfull" element={<Successfull />}/>
        <Route path="/payemnt" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
      </objectAccess.Provider>
    </div>
  );
}

export default App;
