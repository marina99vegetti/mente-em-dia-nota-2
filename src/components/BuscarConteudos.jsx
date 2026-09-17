import { useState } from 'react'

function BuscarConteudos() {
  const [busca, setBusca] = useState('')
  const [mensagem, setMensagem] = useState('')

  function pesquisar(event) {
    event.preventDefault()

    if (busca.trim() === '') {
      setMensagem('Digite um tema para pesquisar.')
      return
    }

    setMensagem(`Você pesquisou por: ${busca}`)
  }

  return (
    <div className="busca-conteudos">
      <h3>Buscar conteúdos</h3>

      <p>
        Pesquise informações sobre diferentes temas de saúde e bem-estar.
      </p>

      <form onSubmit={pesquisar}>
        <input
          type="text"
          placeholder="Digite um tema..."
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />

        <button type="submit">Pesquisar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}

export default BuscarConteudos
