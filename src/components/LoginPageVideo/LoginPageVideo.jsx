import React from "react";

function LoginPageVideo(props) {
  return (
    <>
      <div className="osahan-signup login-page">
        <video loop autoPlay muted id="vid">
          <source src={props.src} type={props.type} />
          <source src={props.src1} type={props.type1} />
           <p>{props.para}</p>
        </video>
      </div>
    </>
  );
}

export default LoginPageVideo;
