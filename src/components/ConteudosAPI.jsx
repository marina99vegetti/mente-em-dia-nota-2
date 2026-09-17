import { useEffect, useState } from 'react'

function ConteudosAPI() {
  const [conteudos, setConteudos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
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
    return <p>Carregando conteúdos...</p>
  }

  if (erro) {
    return <p>{erro}</p>
  }

  return (
    <div className="conteudos-api">
      <h3>Conteúdos recentes</h3>

      {conteudos.map((conteudo, index) => {
  const titulos = [
    'Cuidados com a saúde mental',
    'A importância do bem-estar',
    'Hábitos para uma vida saudável',
    'Cuidando da saúde no dia a dia',
    'Saúde e qualidade de vida'
  ]

  const textos = [
    'Cuidar da saúde mental é importante para manter o equilíbrio e a qualidade de vida.',
    'Pequenos cuidados com o bem-estar podem contribuir para uma rotina mais saudável.',
    'Ter hábitos saudáveis ajuda a promover saúde e bem-estar ao longo da vida.',
    'Reservar um tempo para cuidar de si também faz parte de uma rotina saudável.',
    'Informação e autocuidado são importantes para promover uma vida mais saudável.'
  ]

  return (
    <article key={conteudo.id}>
      <h4>{titulos[index]}</h4>
      <p>{textos[index]}</p>
    </article>
  )
})}
    </div>
  )
}

export default ConteudosAPI