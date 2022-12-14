import React from "react";
import "./Main.scss";
import imageCon from "../assets/images/image-qr-code.png";

const Main = () => {
  return (
    <div>
      <header className="App-header">
        <div className="App-header__qrcode-container">
          <img src={imageCon} alt="qr code" className="image" />
          <div className="para-container">
            <h1> Improve your front-end skills by building projects</h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Main;
