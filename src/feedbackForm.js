import React, { useState } from "react";
import "./feedbackForm.css";
import logo from "./logo.svg";

function FeedbackForm() {
  return (
    <div className="feedback-form-container">
      <div className="feedback-form">
        <img src={logo} alt="Logo" />
        <h1 className="main-text">Залишити заявку на зворотній зв'язок</h1>
        <input type="text" placeholder="ПІБ" />
        <input type="email" placeholder="Електрона адреса" />
        <input type="tel" placeholder="Телефон" />
        <div className="checkbox-container">
          <input type="checkbox" />
          <label className="checkbox-label">
            Даю згоду на обробку персональних даних
          </label>
        </div>
        <button type="submit" className="submit-button">
          Надіслати
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
