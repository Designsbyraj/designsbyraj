import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from './components/web/Index';
import MobileIndex from "./components/mobile/Index"
import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


function App() {

  return (
    <div className="App">
       <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route exact path="*" element={isMobile ? <MobileIndex/> : <Index/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
