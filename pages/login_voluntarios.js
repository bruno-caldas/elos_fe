import PageHeadMeta from "./page_head_meta";
import Navbar from "./navbar";

export default function login_voluntarios() {
  return <>
    <PageHeadMeta></PageHeadMeta>
          
    <Navbar></Navbar>
          
  <div className="container-fluid">
    {/* <!-- Cabeçalho da página --> */}
      <div className="row justify-content-center jumbotron jumbotron-fluid bg-secondary mt-4 py-4">
        <div className="col-auto">
          <img className="univesp-elos img-fluid rounded mx-auto my-auto d-block" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/evento2.svg" alt="Logo balões de festa Univesp e Elos de Amor" width="90px" />
        </div>
        <div className="col-md-8 text-white">
          <h2 className="display-5 font-italic">Login de Voluntários</h2>
          <p className="lead">Faça seu login!</p>
        </div>
      </div>
      {/* <!-- Fim do cabeçalho --> */}
    {/* <!-- Conteúdo Principal --> */}
      <div className="row justify-content-center mt-0">
        <div className="col-md-8 border-secondy justify-content-start">
            <div className="col-md-4 mx-auto">
              <div className="col-md-8 border-secondy">
                {/* {% include 'templates/../_alerts.html' %} */}
              </div>
                {/* {% if request.user.is_authenticated %} */}
                <h3><i className="fa fa-exclamation" aria-hidden="true"></i>
                    Acesso Não Permitido
                </h3>
                <hr />
                <p className="lead">
                    <strong>Usuário não possui acesso ao modulo de cadastro</strong>
                </p>
                {/* {% else %} */}
                <hr />
                <form action="" method="POST">
                    {/* {{ form|crispy }} */}
                    <br />
                    <button type="submit" className="btn btn-secondary">Acessar</button>
                </form>
                {/* {% endif %} */}
            </div>
        </div>
        {/* <!-- Fim row--> */}
      </div>
      {/* <!-- Fim do Conteúdo principal --> */}

    </div>
  </>
}
