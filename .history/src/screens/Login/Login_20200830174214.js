import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Card className="login__container">
        <CardContent>
          <img src={logo} alt="" />
          <h1> Welcome back</h1>
          <p>
            Don't miss your next opportunity, Sign in to stay updated on your
            proffessional world
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
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
