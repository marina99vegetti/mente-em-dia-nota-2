import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Ods from './components/Ods'
import Temas from './components/Temas'
import Publico from './components/Publico'
import Recursos from './components/Recursos'

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Ods /> 
        <Temas />
        <Publico />
        <Recursos />
      </main>

      <footer>
        <p>Mente em Dia • ODS 3 • Saúde e Bem-Estar</p>
        <p>Projeto acadêmico • 2026</p>
      </footer>
    </div>
  )
}

export default App 



