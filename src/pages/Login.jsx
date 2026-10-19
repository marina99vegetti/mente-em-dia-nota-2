
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function entrar(event) {
    event.preventDefault()
    setErro('')
    setCarregando(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    })

    setCarregando(false)

    if (error) {
      setErro('Não foi possível entrar. Confira seu e-mail e sua senha.')
      return
    }

    window.location.href = '/minha-area'
  }

  async function recuperarSenha() {
    setErro('')

    if (!email.trim()) {
      setErro('Digite seu e-mail no campo acima para recuperar a senha.')
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/redefinir-senha`,
    })

    setErro(
      error
        ? 'Não foi possível enviar o e-mail. Confira o endereço informado.'
        : 'Se o endereço estiver cadastrado, você receberá um e-mail para redefinir a senha.'
    )
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/" className="auth-voltar">
          ← Voltar ao início
        </Link>

        <div className="auth-icone">🧠</div>
        <h1>Que bom ter você de volta!</h1>
        <p className="auth-subtitulo">
          Entre na sua conta para acompanhar seu bem-estar.
        </p>

        <form onSubmit={entrar}>
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

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite sua senha"
            autoComplete="current-password"
            required
          />

          {erro && <p className="auth-mensagem">{erro}</p>}

          <button type="submit" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <button
          type="button"
          className="auth-link-botao"
          onClick={recuperarSenha}
        >
          Esqueci minha senha
        </button>

        <p className="auth-rodape">
          Ainda não tem conta? <Link to="/cadastro">Criar conta</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
