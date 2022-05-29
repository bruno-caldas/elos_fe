import PageHeadMeta from "./page_head_meta";
import PageHeadParceiros from "./page_head_parceiros";
import Navbar from "./navbar";
import env from '../.env.production.local';

function Parceiros({dados}) {
  return <>
    <PageHeadMeta></PageHeadMeta>
          
      <Navbar></Navbar>
      
    <div className="container-fluid">
    <PageHeadParceiros></PageHeadParceiros>

    {/*<!-- Conteúdo Principal --> */}
      <div className="row justify-content-center mt-0">
        <div className="col-md-8 border-secondy">
          
        {dados.map((dado) => (
          <div className="card mt-2 shadow" key={dado.nome_parceiro} >
            <div className="card-header bg-secondary align-middle text-white">
              <span className="material-icons align-middle fs-5">business</span>
              <span className="align-middle fs-5">{ dado.nome_parceiro }</span>
            </div>
            <div className="row card-body">
              <div className="col-auto">
                <span className="material-icons fs-6">description</span>
              </div>
              <div className="col">
                <p className="card-text">{ dado.descricao_parceiro }</p>
                <a href="{{ dado.site_parceiro }}" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Confira aqui!</a>
              </div>
            </div>
          </div>
              ) ) } .
        </div>
        {/* <!-- Fim row--> */}
      </div>
      {/* <!-- Fim do Conteúdo principal --> */}

    </div>

  </>
}


export async function getStaticProps() {
  const res_get_token = await fetch(env.API_URL + 'token/', {
    method: 'POST',
    body: JSON.stringify({ "username": env.username, "password": env.password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const raw_token = await res_get_token.json();

  const res_get_data = await fetch(env.API_URL + 'parceiros/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${raw_token.access}`,
    },
  })
  const dados = await res_get_data.json();

  return {
    props: {
      dados
    }
  }
}

export default Parceiros
