import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  if (process.env === "production") {
    console.log = function () {};
  }
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/create" component={Create} />
      <div style={{ marginTop: "20px" }}>
        <Route exact path="/read" component={Read} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
