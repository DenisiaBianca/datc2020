// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "../Styles/LoginPage.css";
import { useHistory } from "react-router-dom";
import Services from "../Services/Services";
import axios from "axios";

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState({ PartitionKey: "", RowKey: "" });
  const [login, setLogin] = useState(true);
  const history = useHistory();
  const { Login } = Services();

  function LoginClick() {
    console.log("Try to login");
    console.log(userName);
    console.log(password);
    tryToLogin();
    if (login) history.push("/admin");
    else alert("parola grasita");
  }

  const tryToLogin = async () => {
    const data = {
      PartitionKey: userName,
      RowKey: password,
    };
    await axios
      .post("https://l05.azurewebsites.net/Administratori/LogIn", data)
      .then((response) => response)
      .then((json) => {
        console.log(json.data);
        setLogin(json.data);
        return json.data;
      });
  };

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
              autoComplete={password}
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
