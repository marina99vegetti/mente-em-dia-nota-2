
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Auth.css'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function cadastrar(event) {
    event.preventDefault()
    setErro('')
    setMensagem('')

    if (senha.length < 8) {
      setErro('A senha precisa ter pelo menos 8 caracteres.')
      return
    }

    setCarregando(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: { display_name: nome.trim() },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    })

    setCarregando(false)

    if (error) {
      setErro(error.message)
      return
    }

    if (data.session) {
      window.location.href = '/minha-area'
      return
    }

    setMensagem(
      'Cadastro iniciado! Confira seu e-mail para confirmar a conta antes de entrar.'
    )
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/" className="auth-voltar">
          ← Voltar ao início
        </Link>

        <div className="auth-icone">🌱</div>
        <h1>Crie sua conta</h1>
        <p className="auth-subtitulo">
          Um espaço para acompanhar seu bem-estar, no seu ritmo.
        </p>

        <form onSubmit={cadastrar}>
          <label htmlFor="nome">Como podemos te chamar?</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />

          <label htmlFor="senha">Crie uma senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Pelo menos 8 caracteres"
            autoComplete="new-password"
            minLength={8}
            required
          />

          {erro && <p className="auth-mensagem">{erro}</p>}
          {mensagem && <p className="auth-sucesso">{mensagem}</p>}

          <button type="submit" disabled={carregando}>
            {carregando ? 'Criando conta...' : 'Criar minha conta'}
          </button>
        </form>

        <p className="auth-rodape">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </section>
    </main>
  )
}

export default Cadastro
