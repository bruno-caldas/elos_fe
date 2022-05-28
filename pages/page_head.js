
export default function PageHead() {

  return <>
    {/* <!-- Cabeçalho da página --> */}
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