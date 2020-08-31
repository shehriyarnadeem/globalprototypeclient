import React, { useState } from "react";
import HttpService from "../../HttpService";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };

    try {
      const result = await HttpService.post("/login", params);
      localStorage.setItem(token, result.data.data.token);
    } catch (e) {
      console.log(e);
      setError("Invalid username or password");
    }
  };

  console.log(error);
  return (
    <div className="login">
      <div className="login__container">
        {/* <img src={logo} alt="" /> */}
        <h1> Welcome to Global Prototype</h1>
        <p>
          This is an opensource platform which demonstrate all tech related
          tools and features. Feel to implement one of yours
        </p>

        <form onSubmit={handleSubmit}>
          <div className="login__container_input">
            <input
              value={email}
              placeholder="Email or Phone"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__container_sigin" type="submit">
              Sign in
            </button>
            {error ? <h1>{error}</h1> : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
