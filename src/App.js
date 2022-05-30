import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Create from "pages/Create";
import Proposal from "components/Proposal";

function App() {
  return (
    <Router>
      <Routes basename="/">
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Create />} />
        <Route path="/proposal/:id" element={<Proposal />} />
      </Routes>
    </Router>
  );
}

export default App;
