import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./Components/Chats";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
