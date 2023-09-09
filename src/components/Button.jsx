// Button.js
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm"; // Import the RegistrationForm component

// import styles from "./src/index.css";
import "../index.css"; // Import the popup styles

const Button = ({ styles }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button type="button" onClick={openPopup} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        Register
      </button>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <button onClick={closePopup} className="close-button">
              &times;
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
