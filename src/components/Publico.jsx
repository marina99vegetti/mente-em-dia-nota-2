function Publico() {
  const publico = [
    {
      icone: '🎓',
      titulo: 'Estudantes',
      texto: 'Informações para quem vive uma rotina de estudos e busca cuidar do bem-estar.'
    },
    {
      icone: '👥',
      titulo: 'Jovens',
      texto: 'Conteúdos acessíveis para jovens que desejam conhecer mais sobre saúde e qualidade de vida.'
    },
    {
      icone: '💻',
      titulo: 'Usuários digitais',
      texto: 'Uma aplicação simples para quem busca informações de saúde e bem-estar na internet.'
    }
  ]

  return (
    <section id="publico">

      <div className="publico-conteudo">

        <div className="publico-texto">

          <span className="publico-label">
            PÚBLICO-ALVO
          </span>

          <h2>
            Feito para jovens e estudantes.
          </h2>

          <p>
            O Mente em Dia foi pensado principalmente para jovens e estudantes
            que utilizam a internet em busca de informações sobre saúde e bem-estar.
          </p>

          <p>
            A proposta é oferecer conteúdos de forma simples, organizada e acessível,
            contribuindo para o conhecimento e o cuidado com a qualidade de vida.
          </p>

        </div>

        <div className="publico-lista">

          {publico.map((item) => (
            <div className="publico-item" key={item.titulo}>

              <div className="publico-icone">
                {item.icone}
              </div>

              <div>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Publico