function Publico() {
  const publico = [
    'Estudantes',
    'Jovens',
    'Usuários digitais'
  ]

  return (
    <section id="publico">
      <h2>Para quem é o Mente em Dia?</h2>

      <p>
        A aplicação foi pensada principalmente para jovens e estudantes
        que utilizam a internet em busca de informações sobre saúde e bem-estar.
      </p>

      <div>
        {publico.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publico
