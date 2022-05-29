
export default function PageHeadEventos() {

  return <>
    {/* <!-- Cabeçalho da página --> */}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Site do abrigo de animais Kãotinho" />
    <meta name="author" content="Alunos da UNIVESP - Eixo Computação - 2020" />
    <div className="row justify-content-center jumbotron jumbotron-fluid bg-secondary mt-4 py-4">
    <div className="col-auto">
      <img className="univesp-kaotinho img-fluid rounded mx-auto d-block" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/evento2.svg" alt="Univesp e Kaotinho" width="90px" />
    </div>
    <div className="col-md-8 text-white">
      <h2 className="display-5 font-italic">Projetos e Eventos</h2>
      <p className="lead">Participe dos Projetos e Eventos!</p>
    </div>
  </div>
  {/* <!-- Fim do cabeçalho --> */}
  </>
}
