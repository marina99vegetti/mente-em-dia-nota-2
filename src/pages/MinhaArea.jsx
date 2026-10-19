
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Auth.css'

const humores = [
  { valor: 'muito_bem', emoji: '😁', texto: 'Muito bem' },
  { valor: 'bem', emoji: '🙂', texto: 'Bem' },
  { valor: 'neutro', emoji: '😐', texto: 'Mais ou menos' },
  { valor: 'mal', emoji: '😔', texto: 'Mal' },
  { valor: 'muito_mal', emoji: '😢', texto: 'Muito mal' },
]

function MinhaArea() {
  const [usuario, setUsuario] = useState(null)
  const [humor, setHumor] = useState('')
  const [nota, setNota] = useState('')
  const [registros, setRegistros] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [mensagem, setMensagem] = useState('')
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    let ativo = true

    async function carregarDados() {
      const { data, error } = await supabase.auth.getUser()

      if (!ativo) return

      if (error || !data.user) {
        window.location.replace('/login')
        return
      }

      setUsuario(data.user)

      const [diario, salvos] = await Promise.all([
        supabase
          .from('wellbeing_entries')
          .select('id, mood, note, entry_date, created_at')
          .order('created_at', { ascending: false }),
        supabase
          .from('favorites')
          .select('id, content_id, created_at')
          .order('created_at', { ascending: false }),
      ])

      if (!ativo) return

      if (diario.error || salvos.error) {
        setMensagem(
          'Não foi possível carregar todos os dados. Confira a configuração do banco de dados.'
        )
      } else {
        setRegistros(diario.data)
        setFavoritos(salvos.data)
      }

      setCarregando(false)
    }

    carregarDados()

    return () => {
      ativo = false
    }
  }, [])

  async function salvarRegistro(event) {
    event.preventDefault()
    setMensagem('')

    if (!humor || !usuario) {
      setMensagem('Escolha como você está se sentindo.')
      return
    }

    const { data, error } = await supabase
      .from('wellbeing_entries')
      .insert({
        user_id: usuario.id,
        mood: humor,
        note: nota.trim() || null,
      })
      .select('id, mood, note, entry_date, created_at')
      .single()

    if (error) {
      setMensagem('Não foi possível salvar. Tente novamente.')
      return
    }

    setRegistros((atuais) => [data, ...atuais])
    setHumor('')
    setNota('')
    setMensagem('Seu registro foi salvo com segurança. 💙')
  }

  async function removerFavorito(id) {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('id', id)

    if (error) {
      setMensagem('Não foi possível remover esse favorito.')
      return
    }

    setFavoritos((atuais) => atuais.filter((item) => item.id !== id))
  }

  async function sair() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      setMensagem('Não foi possível encerrar a sessão. Tente novamente.')
      return
    }

    window.location.replace('/')
  }

  if (carregando) {
    return <main className="auth-page"><p>Carregando sua área...</p></main>
  }

  const nome =
    usuario?.user_metadata?.display_name ||
    usuario?.email?.split('@')[0] ||
    'pessoa'

  return (
    <main className="area-page">
      <header className="area-topo">
        <Link to="/" className="area-logo">🧠 Mente em Dia</Link>
        <button type="button" className="area-sair" onClick={sair}>
          Sair
        </button>
      </header>

      <section className="area-conteudo">
        <p className="area-etiqueta">SEU ESPAÇO DE CUIDADO</p>
        <h1>Olá, {nome}! 💙</h1>
        <p>Como você está se sentindo hoje?</p>

        {mensagem && <p className="auth-mensagem" role="status">{mensagem}</p>}

        <section className="area-card">
          <h2>Meu diário de bem-estar</h2>
          <p>Registre como você está se sentindo. Não existe resposta certa ou errada.</p>

          <form onSubmit={salvarRegistro}>
            <div className="area-humores">
              {humores.map((item) => (
                <button
                  key={item.valor}
                  type="button"
                  className={`area-humor ${humor === item.valor ? 'selecionado' : ''}`}
                  aria-pressed={humor === item.valor}
                  onClick={() => setHumor(item.valor)}
                >
                  <span>{item.emoji}</span>
                  {item.texto}
                </button>
              ))}
            </div>

            <label htmlFor="nota-bem-estar">Quer escrever alguma coisa? (opcional)</label>
            <textarea
              id="nota-bem-estar"
              value={nota}
              onChange={(event) => setNota(event.target.value)}
              placeholder="Como foi seu dia? O que está passando pela sua cabeça?"
              rows={4}
              maxLength={2000}
            />

            <button type="submit" className="area-salvar">Salvar registro</button>
          </form>
        </section>

        <section className="area-card">
          <h2>Meus registros</h2>

          {registros.length === 0 ? (
            <p>Você ainda não tem registros. Seu primeiro passo pode ser hoje. 🌱</p>
          ) : (
            <div className="area-lista">
              {registros.map((registro) => {
                const item = humores.find((h) => h.valor === registro.mood)

                return (
                  <article className="area-registro" key={registro.id}>
                    <div>
                      <strong>{item?.emoji} {item?.texto || registro.mood}</strong>
                      <p>{new Date(`${registro.entry_date}T12:00:00`).toLocaleDateString('pt-BR')}</p>
                      {registro.note && <p>{registro.note}</p>}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>

        <section className="area-card">
          <h2>Conteúdos favoritos</h2>

          {favoritos.length === 0 ? (
            <p>Quando você salvar conteúdos como favoritos, eles aparecerão aqui.</p>
          ) : (
            <div className="area-lista">
              {favoritos.map((favorito) => (
                <article className="area-registro" key={favorito.id}>
                  <div>
                    <strong>{favorito.content_id}</strong>
                  </div>
                  <button
                    type="button"
                    className="area-sair"
                    onClick={() => removerFavorito(favorito.id)}
                  >
                    Remover
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        <p className="area-aviso">
          Este espaço é educativo e de autocuidado. Não substitui acompanhamento profissional.
        </p>
      </section>
    </main>
  )
}

export default MinhaArea
