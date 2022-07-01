import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form">
      <form>
        <h3 id="form-title">Fill in the Form</h3>
        <h6>Name: </h6>
        <input></input>
        <h6>Email:</h6>
        <input></input>
        <h6>Message: </h6>
        <textarea></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
