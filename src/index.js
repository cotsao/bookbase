import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d5iqohfm.us.auth0.com"
      clientId="4y4RYNsZCArccTXpX6aui2P0gSjyxLE9"
      redirectUri={window.location.origin + "/profile"}
      audience={`${process.env.REACT_APP_SERVER_URL}/`}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
