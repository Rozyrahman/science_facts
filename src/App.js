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
    <Router basename="/science_facts">
      {/* basename changed */}
      <Navber />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" exact element={<About />} />
        {/* ---------topics--------- */}
        <Route path="/sciFact" exact element={<TopicSeeMore />} />
        <Route path="/dummyText" exact element={<DemmyTopic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
