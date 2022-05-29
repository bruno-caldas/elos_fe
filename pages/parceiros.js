import PageHeadMeta from "./page_head_meta";
import PageHeadParceiros from "./page_head_parceiros";
import Navbar from "./navbar";

function Parceiros({dados}) {
  return <>
    <PageHeadMeta></PageHeadMeta>
          
      <Navbar></Navbar>
      
    <div class="container-fluid">
    <PageHeadParceiros></PageHeadParceiros>

    {/*<!-- Conteúdo Principal --> */}
      <div class="row justify-content-center mt-0">
        <div class="col-md-8 border-secondy">
          
        {dados.map((dado) => (
          <div class="card mt-2 shadow" key={dado.nome_parceiro} >
            <div class="card-header bg-secondary align-middle text-white">
              <span class="material-icons align-middle fs-5">business</span>
              <span class="align-middle fs-5">{ dado.nome_parceiro }</span>
            </div>
            <div class="row card-body">
              <div class="col-auto">
                <span class="material-icons fs-6">description</span>
              </div>
              <div class="col">
                <p class="card-text">{ dado.descricao_parceiro }</p>
                <a href="{{ dado.site_parceiro }}" class="btn btn-secondary" target="_blank">Confira aqui!</a>
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
  const res = await fetch('https://elos-be.herokuapp.com/api/parceiros/')
  const dados = await res.json();

  return {
    props: {
      dados
    }
  }
}

export default Parceiros
