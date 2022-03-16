import "./App.css";
import InputForm from "./components/InputForm";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/signup" element={<InputForm />} />
            <Route path="/" element={<InputForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
