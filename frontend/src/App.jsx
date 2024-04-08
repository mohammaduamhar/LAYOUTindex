import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowLocations from "./components/ShowLocations.jsx";
import RegisterDevice from "./pages/RegisterDevice.jsx";
import Home from "./pages/Home.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DevicesView from "./components/DevicesView.jsx";
import Header from "./components/Header.jsx"

export const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showLocations" element={<ShowLocations />} />
        <Route path="/registerDevice/:id" element={<RegisterDevice />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/devicesView/:id" element={<DevicesView />} />

      </Routes>
    </Router>
    </>
  );
};

export default App;
