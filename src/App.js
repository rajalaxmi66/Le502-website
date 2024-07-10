import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Registration from "./registration";
import Login from "./login";
import Catalogue from "./catalogue";
import Cart from "./cart";

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
