import BuscarConteudos from './BuscarConteudos'
import ConteudosAPI from './ConteudosAPI'

function Recursos() {
  return (
    <section id="recursos" className="recursos">

      <div className="section-container">

        <div className="section-header">

          <span className="section-subtitle">
            RECURSOS
          </span>

          <h2 className="recursos-title">
            Uma aplicação pensada para informar
          </h2>

          <p className="section-text">
            Nesta etapa, a aplicação recebeu recursos interativos
            e consumo de dados externos para ampliar sua
            funcionalidade.
          </p>

        </div>

        <div className="recursos-grid">

          <div className="recurso-card">

            <div className="recurso-icon">
              🔎
            </div>

            <h3>
              Buscar conteúdos
            </h3>

            <p>
              Pesquise informações sobre diferentes temas
              relacionados à saúde e ao bem-estar.
            </p>

            <BuscarConteudos />

          </div>

          <div className="recurso-card">

            <div className="recurso-icon">
              ℹ️
            </div>

            <h3>
              Informações
            </h3>

            <p>
              Consulte conteúdos recebidos por meio de uma
              API externa utilizando Fetch e JSON.
            </p>

            <ConteudosAPI />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Recursos