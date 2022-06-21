import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import TopBtn from "./components/TopBtn";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Detail from "./pages/detail/Detail";
import ReviewWrite from "./pages/ReviewWrite";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/products" element={<Detail />} />
        <Route path="/products/review" element={<ReviewWrite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
