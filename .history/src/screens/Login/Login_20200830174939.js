import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("sd");
  };
  return (
    <div className="login">
      <div className="login__container">
        {/* <img src={logo} alt="" /> */}
        <h1> Welcome to Global Prototype</h1>
        <p>
          This is an opensource platform which demonstrate all tech related
          tools and features. Feel to implement one of yours
        </p>

        <form>
          <div className="login__container_input">
            <input
              value={email}
              placeholder="Email or Phone"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__container_sigin">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
