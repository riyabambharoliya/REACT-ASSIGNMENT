// Create a form with inputs for name, email, and password. Use state to control the
// form and display the form data when the user submits it.

import React, { useState } from "react";

function Third() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitdata, setsubmitdata] = useState(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    // alert("submited...")

    setsubmitdata(formdata);
  };

  const handlechange = (e) => {
    setformdata((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <h2>Registration form</h2>
      <form onSubmit={handlesubmit}>
        <label> Name : </label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handlechange}
        />{" "}
        <br />
        <label> Email : </label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
        />{" "}
        <br />
        <label> Password : </label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handlechange}
          placeholder="4 digit only"
        />{" "}
        <br />
        <input type="submit" />
      </form>

      {submitdata && (
        <div>
          <h1>Name : {submitdata.name}</h1>
          <h1>Email : {submitdata.email}</h1>
          <h1>Password : {submitdata.password}</h1>
        </div>
      )}
    </div>
  );
}

export default Third;
