import React from 'react';
import './App.css';
import SignIn from './SignIn/SignIn';
import Index from './SignUp/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from './data/Data';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* The path "/" corresponds to the root path. Adjust it based on your needs. */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/data" element={<Data/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
