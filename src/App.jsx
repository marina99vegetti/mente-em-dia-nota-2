
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Ods from './components/Ods'
import Temas from './components/Temas'
import Publico from './components/Publico'
import Recursos from './components/Recursos'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import MinhaArea from './pages/MinhaArea'

function PaginaInicial() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Ods />
        <Temas />
        <Publico />
        <Recursos />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-coluna">
            <h3>🧠 Mente em Dia</h3>
            <p>
              Uma aplicação acadêmica desenvolvida com o objetivo
              de apresentar informações sobre saúde e bem-estar.
            </p>
          </div>

          <div className="footer-coluna">
            <h4>Desenvolvimento Web</h4>
            <p>
              Projeto desenvolvido utilizando React, JavaScript,
              CSS e consumo de API.
            </p>
            <p>Relacionado ao ODS 3 — Saúde e Bem-Estar.</p>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 Mente em Dia • Projeto acadêmico</p>
          <p>Desenvolvido para fins educacionais.</p>
        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/minha-area" element={<MinhaArea />} />
    </Routes>
  )
}

export default App
