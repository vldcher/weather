  
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pannel/Pannel";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { AuthProvider } from "../../Auth";
import PrivateRoute from "../../PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <PrivateRoute exact path="/" component={ Home } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/login" component={ Login } />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;