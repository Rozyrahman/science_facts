import React from "react";
import Navber from "./components/Navber/Navber.js";
import Home from "./components/Pages/Home/Home.js";
import TopicSeeMore from "./components/Pages/TopicSeeMore/firststtopic";
import DemmyTopic from "./components/Pages/TopicSeeMore/demmyTxt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import About from "./components/Pages/About/About.js";

// import "./App.css";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        {/* ---------topics--------- */}
        <Route path="/science-facts" exact element={<TopicSeeMore />} />
        <Route path="/demmy-text" exact element={<DemmyTopic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
