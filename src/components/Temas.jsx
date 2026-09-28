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
    <section id="temas" className="temas py-5">

      <div className="container py-5">

        <div className="text-center mb-5">

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

        <div className="row g-4">

          {temas.map((tema) => (
            <div className="col-md-6 col-lg-3" key={tema.titulo}>

              <article className="tema-card">

                <div className="tema-icon">
                     <span>{tema.icone}</span>
                </div>

                <h3>{tema.titulo}</h3>

                <p>{tema.descricao}</p>

              </article>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Temas