// eslint-disable-next-line
import React, { useState } from "react";
import "../Styles/LoginPage.css";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  const history = useHistory();

  function LoginClick() {
    console.log("Try to login");
    console.log(userName);
    console.log(password);
    if (userName === "denisia@mail" && password === "12345") {
      setLoginState(true);
      history.push("admin");
    } else {
      console.log("gresit");
      alert("nereusit");
    }
  }

  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            className="btn btn-dark btn-lg btn-block"
            onClick={() => LoginClick()}
          >
            Log in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
