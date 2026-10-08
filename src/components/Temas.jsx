function Temas() {
  const temas = [
    {
      icone: '🧠',
      titulo: 'Saúde Mental',
      descricao:
        'Conheça a importância do autocuidado, das emoções e do bem-estar psicológico.'
    },
    {
      icone: '🌙',
      titulo: 'Sono',
      descricao:
        'Entenda como o descanso é importante para o corpo e para a mente.'
    },
    {
      icone: '🍎',
      titulo: 'Alimentação',
      descricao:
        'Informações sobre hábitos alimentares e qualidade de vida.'
    },
    {
      icone: '🚶',
      titulo: 'Movimento',
      descricao:
        'Descubra a importância de movimentar o corpo para o bem-estar.'
    }
  ]

  return (
    <section id="temas" className="temas">

      <div className="section-container">

        <div className="section-header">

          <span className="section-subtitle">
            BEM-ESTAR
          </span>

          <h2 className="temas-title">
            Cuide de diferentes áreas da sua vida
          </h2>

          <p className="section-text">
            Pequenos hábitos podem contribuir para uma vida
            mais equilibrada e saudável.
          </p>

        </div>

        <div className="temas-grid">

          {temas.map((tema) => (
            <article className="tema-card" key={tema.titulo}>

              <div className="tema-icon">
                {tema.icone}
              </div>

              <h3>
                {tema.titulo}
              </h3>

              <p>
                {tema.descricao}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Temas