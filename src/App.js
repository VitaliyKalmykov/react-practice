import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;