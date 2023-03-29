import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
// Pages

import All from "./pages/All";
import Breakfats from "./pages/Breakfats";
import Lunch from "./pages/Lunch";
import Shakes from "./pages/Shakes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/breakfast" element={<Breakfats />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/shakes" element={<Shakes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
