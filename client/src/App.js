import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route
            exact
            path="/about"
            // key="about"
            element={
              <About
              // setProgress={setProgress}
              // apiKey={apiKey}
              // pageSize={page}
              // country="in"
              // category="business"
              />
            }
          ></Route>
           <Route
            exact
            path="/contact"
            // key="about"
            element={
              <Contact
              // setProgress={setProgress}
              // apiKey={apiKey}
              // pageSize={page}
              // country="in"
              // category="business"
              />
            }
          ></Route>
           <Route
            exact
            path="/register"
            // key="about"
            element={
              <Register
              // setProgress={setProgress}
              // apiKey={apiKey}
              // pageSize={page}
              // country="in"
              // category="business"
              />
            }
          ></Route>
           <Route
            exact
            path="/login"
            // key="about"
            element={
              <Login
              // setProgress={setProgress}
              // apiKey={apiKey}
              // pageSize={page}
              // country="in"
              // category="business"
              />
            }
          ></Route>
           <Route
            exact
            path="/"
            // key="about"
            element={
              <Home
              // setProgress={setProgress}
              // apiKey={apiKey}
              // pageSize={page}
              // country="in"
              // category="business"
              />
            }
          ></Route>
          {/* <About /> */}
          {/* <Contact />
        <Register />
        <Login />
        <Home /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
