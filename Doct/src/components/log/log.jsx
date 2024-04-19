import React, { useEffect } from 'react';
import './style.css'; // Importez vos styles CSS ici

function log() {
  useEffect(() => {
    const handleSignUp = () => {
      const container = document.querySelector(".container");
      container.classList.add("sign-up-mode");
    };

    const handleSignIn = () => {
      const container = document.querySelector(".container");
      container.classList.remove("sign-up-mode");
    };

    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_in_btn = document.querySelector("#sign-in-btn");

    sign_up_btn.addEventListener("click", handleSignUp);
    sign_in_btn.addEventListener("click", handleSignIn);

    return () => {
      sign_up_btn.removeEventListener("click", handleSignUp);
      sign_in_btn.removeEventListener("click", handleSignIn);
    };
  }, []);

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            {/* Votre formulaire de connexion */}
          </form>
          <form action="#" className="sign-up-form">
            {/* Votre formulaire d'inscription */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Log;
