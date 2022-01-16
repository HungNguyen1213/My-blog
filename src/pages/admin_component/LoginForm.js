import React, { useState } from "react";

const LoginForm = () => {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = () => {
    localStorage.setItem("accessToken", true);
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            className="form-control"
            type="text"
            name="userName"
            value={details.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
