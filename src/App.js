import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  NotFoundPage,
  HomePage,
  AboutPage,
  PortfolioPage,
  SignUpPage,
} from "./pages";
import "./App.css";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
