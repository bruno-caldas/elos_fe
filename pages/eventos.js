import PageHeadMeta from "./page_head_meta";
import PageHeadEventos from "./page_head_eventos";
import Navbar from "./navbar";
import Link from "next/link";


function EventData({event_data}) {
  return <>
  <PageHeadMeta></PageHeadMeta>
    {/* {console.log(event_data)} */}
          
      <Navbar></Navbar>
    <div className="container-fluid">
    {/* <!-- Conteúdo Principal --> */}
    <PageHeadEventos></PageHeadEventos>
      <div className="row justify-content-center mt-0">
        <div className="col-md-8 border-secondy justify-content-start">
          {/* <!-- Início do Accordion --> */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Próximos Eventos
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  {/* // <!-- Início do cartão --> */}

            {event_data.map((dado) => (

                  <div className="card mt-2 shadow" key={dado.nome_evento}>
                    <div className="card-header bg-secondary align-middle text-white">
                      <span className="material-icons align-middle fs-5">celebration</span>
                      <span className="align-middle card=title fs-5">{ dado.nome_evento }</span>
                    </div>
                    <div className="card-body">
                      <div className="row justify-content-start">
                        <div className="col-1 fs-6">
                          <svg className="fs-6 bi bi-calendar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
                        </div>
                        <div className="col fs-6">
                          <p className="card-text fs-6">{ dado.data_evento }.</p>
                        </div>
                        <div className="row justify-content-start">
                          <div className="col-1 fs-6">
                            <svg className="fs-6 bi bi-geo-alt" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                          </div>
                          <div className="col fs-6">
                            <p className="card-text fs-6">{ dado.local_evento }.</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1 fs-6">
                            <span className="material-icons fs-6">description</span>
                          </div>
                          <div className="col fs-6">
                            <p className="card-text fs-6">{ dado.descricao_evento }</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1 fs-6">
                            <svg className="fs-6 bi bi-people" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
                          </div>
                          <div className="col fs-6">
                            {/* parceiros */}
                          </div>
                        </div>
                        <div className="m-1">
                          <Link href="https://www.google.com.br/maps/place/{{ evento.local_evento }}"><a className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer">Como chegar</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

      ) ) }

                </div>
              </div>
            </div>
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Eventos Vencidos
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  
                  <div className="card mt-2 shadow">
                    <div className="card-header bg-secondary align-middle text-white">
                      <span className="material-icons align-middle fs-5">celebration</span>
                      <span className="align-middle card=title fs-5"> </span>
                    </div>
                    <div className="card-body">
                      <div className="row justify-content-start">
                        <div className="col-1 fs-6">
                          <svg className="fs-6 bi bi-calendar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
                        </div>
                        <div className="col fs-6">
                          <p className="card-text fs-6"> </p>
                        </div>
                        <div className="row justify-content-start">
                          <div className="col-1 fs-6">
                            <svg className="fs-6 bi bi-geo-alt" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                          </div>
                          <div className="col fs-6">
                            <p className="card-text fs-6"> . <a href="https://www.google.com.br/maps/place/{ evento.local_evento }" target="_blank" rel="noopener noreferrer">Como chegar</a></p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1 fs-6">
                            <span className="material-icons fs-6">description</span>
                          </div>
                          <div className="col fs-6">
                            <p className="card-text fs-6">{ dado.descricao_evento }</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1 fs-6">
                            <svg className="fs-6 bi bi-people" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
                          </div>
                          <div className="col fs-6">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div> */}
          </div>
          {/* <!-- Fim do Accordion --> */}

        </div>
        {/* <!-- Fim row--> */}
      </div>


    </div>

  </>
}


export async function getStaticProps() {
  const res_get_token = await fetch(process.env.API_URL + 'token/', {
    method: 'POST',
    body: JSON.stringify({ "username": process.env.username, "password": process.env.password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const raw_token = await res_get_token.json();

  const res_get_data = await fetch(process.env.API_URL + 'eventos/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${raw_token.access}`,
    },
  })
  const event_data = await res_get_data.json();

  return {
    props: {
      event_data
    }
  }
}

export default EventData
