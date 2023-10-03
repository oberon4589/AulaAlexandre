import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import './App.css';
import Home from './components/pages/home';
import Cardapio from './components/pages/cardapio';
import Contato from './components/pages/contato';
import Sobre from './components/pages/sobre';
import Inscreva from './components/pages/inscreva';
import Login from './components/pages/login';
import Registrar from './components/pages/registrar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/inscreva" element={<Inscreva />} />
                <Route path="*" element={<h1>Página não encontrada</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Registrar />} />
            </Routes>
        </div>
    );
}

export default App;
