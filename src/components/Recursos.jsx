import BuscarConteudos from './BuscarConteudos'
import ConteudosAPI from './ConteudosAPI'
function Recursos() {
  return (
    <section id="recursos">
      <h2>Recursos</h2>

      <p>
        A aplicação contará com recursos para facilitar o acesso a conteúdos
        relacionados à saúde mental e ao bem-estar.
      </p>

      <div>
        <BuscarConteudos />
        
        <ConteudosAPI />

        <article>
          <h3>Informações</h3>
          <p>
            Conteúdos organizados de forma simples, clara e acessível.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Recursos
