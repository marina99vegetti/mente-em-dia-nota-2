function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-container">

        <div className="hero-texto">

          <span className="ods-badge">
            ODS 3 • Saúde e Bem-Estar
          </span>

          <h1>
            Cuidar da mente também é
            <span> cuidar de você.</span>
          </h1>

          <p className="lead">
            O Mente em Dia é uma aplicação criada para reunir
            informações sobre saúde, bem-estar e qualidade de vida
            de forma simples e acessível.
          </p>

          <a href="#sobre" className="btn-primary">
            Conheça o projeto
          </a>

        </div>

        <div className="hero-card">

          <div className="brain-icon">
            🧠
          </div>

          <h2>Seu bem-estar importa.</h2>

          <p>
            Informação também é uma forma de cuidado.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Hero