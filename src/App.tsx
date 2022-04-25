import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/home/Home"
import Carrinho from "./pages/carrinho/Carrinho"
import Login from "./pages/login/Login"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;