import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Admin from "./components/Admin";
import Deals from "./components/Deals";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import ManageBooks from "./components/ManageBooks";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/manage-books" element={<ManageBooks />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/edit-book/" element={<EditBook />} />
          <Route path="/admin/edit-book/:id" element={<EditBook />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
