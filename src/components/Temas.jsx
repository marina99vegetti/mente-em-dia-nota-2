function Temas() {
  const temas = [
    {
      titulo: 'Saúde Mental',
      descricao: 'Informações para compreender e cuidar da saúde emocional.'
    },
    {
      titulo: 'Sono',
      descricao: 'A importância de uma boa rotina de sono para o bem-estar.'
    },
    {
      titulo: 'Alimentação',
      descricao: 'Hábitos alimentares e sua relação com a qualidade de vida.'
    },
    {
      titulo: 'Movimento',
      descricao: 'A prática de atividades físicas como parte do autocuidado.'
    }
  ]

  return (
    <section id="temas">
      <h2>Bem-estar</h2>

      <p>
        Conheça alguns temas relacionados à saúde e à qualidade de vida.
      </p>

      <div>
        {temas.map((tema) => (
          <article key={tema.titulo}>
            <h3>{tema.titulo}</h3>
            <p>{tema.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Temas