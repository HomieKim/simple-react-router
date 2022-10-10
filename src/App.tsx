import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Router } from "./router";
import { About, Root } from "./components";

function App() {
  return (
    <Router>
      <Route to="/" element={<Root />} />
      <Route to="/about" element={<About />} />
    </Router>
  );
}

export default App;
