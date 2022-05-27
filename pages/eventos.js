import Head from 'next/head'

function EventData({event_data}) {
  return <>
    {console.log(event_data)}
        {event_data.map((dado) => (
    <div className="card mt-2 shadow" key={dado.nome_evento}  style={{"text-align": "center", "margin-top": "40px"}}>
      <div className="card-header bg-secondary align-middle text-white">
        <span className="material-icons align-middle fs-5">celebration</span>
        <span className="align-middle card=title fs-5">{dado.nome_evento}</span>
      </div>
      <div className="card-body">
        <div className="row justify-content-start">
          <div className="col-1 fs-6">
            <svg className="fs-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
          </div>
          <div className="col fs-6">
            <p className="card-text fs-6">{dado.data_evento}, faltam  x d.</p>
          </div>
          <div className="row justify-content-start">
            <div className="col-1 fs-6">
              <svg className="fs-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            </div>
            <div className="col fs-6">
              <p className="card-text fs-6">{dado.local_evento}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 fs-6">
              <span className="material-icons fs-6">description</span>
            </div>
            <div className="col fs-6">
              <p className="card-text fs-6">{dado.descricao_evento}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 fs-6">
              <svg className="fs-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
            </div>
            <div className="col fs-6">
            
              
              <span className="card-text fs-6">Pareceiro 1 |</span>          
              
            
            </div>
          </div>
          <div className="m-1">
            <a className="btn btn-secondary" href="https://www.google.com.br/maps/place/Jundiaí" role="button" target="_blank">Como chegar</a>
          </div>
        </div>
      </div>
  <hr></hr>
    </div>

) ) } .
  </>
}


export async function getStaticProps() {
  const res_get_token = await fetch('https://elos-be.herokuapp.com/api/token/', {
    method: 'POST',
    body: JSON.stringify({ "username": "admin", "password": "admin" }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const raw_token = await res_get_token.json();

  const res_get_data = await fetch('https://elos-be.herokuapp.com/api/eventos/', {
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
