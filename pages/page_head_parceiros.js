
export default function PageHeadParceiros() {

  return <>
  
    {/* <!-- Cabeçalho da página --> */}
    <div className="row justify-content-center jumbotron jumbotron-fluid bg-secondary mt-4 py-4">
        <div className="col-auto">
          <img className="univesp-kaotinho img-fluid rounded mx-auto d-block" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/parceiro2.svg" alt="Univesp e Kaotinho" width="90px" />
        </div>
        <div className="col-md-8 text-white">
          <h2 className="display-5 font-italic">Nossos Parceiros</h2>
          <p className="lead">Confira os parceiros do projeto.</p>
        </div>
      </div>
      {/* <!-- Fim do cabeçalho -->*/}
  </>
}
