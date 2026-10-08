import { useEffect, useState } from 'react'

function ConteudosAPI() {
  const [conteudos, setConteudos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao buscar os conteúdos.')
        }

        return resposta.json()
      })
      .then((dados) => {
        setConteudos(dados)
        setCarregando(false)
      })
      .catch(() => {
        setErro('Não foi possível carregar os conteúdos.')
        setCarregando(false)
      })
  }, [])

  if (carregando) {
    return (
      <p className="api-status">
        Carregando conteúdos...
      </p>
    )
  }

  if (erro) {
    return (
      <p className="api-status">
        {erro}
      </p>
    )
  }

  return (
    <div className="conteudos-api">

      {conteudos.map((conteudo) => (
        <article key={conteudo.id}>

          <h4>
            {conteudo.title}
          </h4>

          <p>
            {conteudo.body}
          </p>

        </article>
      ))}

    </div>
  )
}

export default ConteudosAPI