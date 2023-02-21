import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import ListCandidati from "./components/ListCandidati";
import CreateCandidat from "./components/CreateCandidat";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ListCandidati />} />
            <Route path="/create" element={<CreateCandidat />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;