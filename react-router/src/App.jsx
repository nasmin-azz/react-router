import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
