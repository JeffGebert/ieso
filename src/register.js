import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { withRouter, useHistory } from "react-router-dom";

const RegisterPage = function(props) {
  let history = useHistory();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: ""
  });

  const registerUser = function(newUser) {
      console.log("new user", newUser)
    return axios.post(`http://localhost:3000/register`, newUser);
  };

  function onSave(ev) {
    ev.preventDefault();
    registerUser(state)
      .then(res => {
        if (res.data.error_message) {
          console.log("invalid credentials");
        }
        if (res.data.token) {
          localStorage.setItem("id_token", res.data.token);
        }
      })
      .then(() => {
          history.push("/prices")
       
      })
      .catch(error => console.log("error"));
  }

  return (
    <div className="layout-padding">
      <i
        className="fas fa-arrow-left back back-login-register"
        onClick={() => history.push("/")}
      />

      <form autoComplete="off" onSubmit={event => onSave(event)}>
        <div className="container">
          <label>First name</label>
          <input
            type="text"
            className="input-field"
            value={state.first_name}
            onChange={event =>
              setState({ ...state, first_name: event.target.value })
            }
          />
          <label>Last name</label>
          <input
            type="text"
            className="input-field"
            value={state.last_name}
            onChange={event =>
              setState({ ...state, last_name: event.target.value })
            }
          />
          <label>Email Address</label>
          <input
            type="email"
            className="input-field"
            value={state.email}
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
            className="input-field"
            value={state.password}
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          <label>Phone number</label>
          <input
            type="tel"
            className="input-field"
            value={state.phone}
            onChange={event =>
              setState({ ...state, phone: event.target.value })
            }
          />
          <button className="login-register-button register">REGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);