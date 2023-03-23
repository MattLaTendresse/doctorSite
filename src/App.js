import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorList from "./Components/DoctorList";
import DoctorDetails from "./Components/DoctorDetails";
import AppHeader from "./Components/AppBar";

const App = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <Router>
        <Routes>
          <Route exact path="/" element={<DoctorList />}></Route>
          <Route path="/doctors/:id" element={<DoctorDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
