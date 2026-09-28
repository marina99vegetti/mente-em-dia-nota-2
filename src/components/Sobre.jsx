function Sobre() {
  return (
    <section id="sobre">
      <span className="secao-label">SOBRE O PROJETO</span>

      <h2>Por que o Mente em Dia?</h2>

      <p className="subtitulo">
        Informação acessível também pode ser uma forma de cuidado.
      </p>

      <div className="sobre-conteudo">

        <div className="sobre-card">
          <div className="sobre-icone">☁️</div>

          <h3>Uma necessidade real</h3>

          <p>
            Jovens e estudantes enfrentam diferentes desafios que podem afetar
            sua saúde e seu bem-estar. Muitas vezes, encontrar informações
            claras, organizadas e acessíveis sobre esses assuntos pode ser difícil.
          </p>

          <p>
            O Mente em Dia surge como uma proposta de aplicação web voltada para
            reunir conteúdos relacionados ao bem-estar e à qualidade de vida.
          </p>
        </div>

        <div className="sobre-info">

          <div className="sobre-item">
            <div className="sobre-item-icone">🔎</div>
            <div>
              <h3>Informação</h3>
              <p>
                Facilitar o acesso a conteúdos relacionados à saúde e ao bem-estar.
              </p>
            </div>
          </div>

          <div className="sobre-item">
            <div className="sobre-item-icone">📚</div>
            <div>
              <h3>Conhecimento</h3>
              <p>
                Apresentar informações de forma simples e organizada.
              </p>
            </div>
          </div>

          <div className="sobre-item">
            <div className="sobre-item-icone">🤝</div>
            <div>
              <h3>Acessibilidade</h3>
              <p>
                Criar uma interface clara, responsiva e fácil de utilizar.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Sobre