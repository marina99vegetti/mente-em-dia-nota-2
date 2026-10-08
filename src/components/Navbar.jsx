import { useState } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">

          <a className="navbar-brand" href="#inicio" onClick={fecharMenu}>
            🧠 Mente em Dia
          </a>

          <button
            className="navbar-toggle"
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            ☰
          </button>

          <div className={`navbar-menu ${menuAberto ? 'aberto' : ''}`}>
            <a href="#inicio" onClick={fecharMenu}>Início</a>
            <a href="#sobre" onClick={fecharMenu}>Sobre</a>
            <a href="#ods" onClick={fecharMenu}>ODS 3</a>
            <a href="#temas" onClick={fecharMenu}>Bem-estar</a>
            <a href="#publico" onClick={fecharMenu}>Público-alvo</a>
            <a href="#recursos" onClick={fecharMenu}>Recursos</a>
          </div>


        </div>
      </nav>
    </header>
  )
}

export default Navbar