import Link from 'next/link'

import Carrossel from "../src/components/carrossel";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <Carrossel></Carrossel>
        {/* <!-- Conteúdo Principal do site --> */}
        <div className="container marketing">
          {/* <!-- Três colunas de texto --> */}
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/ajuda1.png" alt="ajuda" width="140" height="140" />
              <h2>Como ajudar?</h2>
              <p>Precisamos de você, verifique como ajudar.</p>
              <p>
                <Link href="">
                  <a className="btn btn-secondary" href="{% url 'ajuda' %}" role="button">Mais detalhes »</a>
                </Link>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/resgate1.png" alt="resgate" width="140" height="140"/>
              <h2>Blog Elos de Amor</h2>
              <p>Confira nosso blog com dicas e sugestões.</p>
              <p>
                <Link href="/blog">
                  <a className="btn btn-secondary" href="{% url 'resgate' %}" role="button">Mais detalhes »</a>
                </Link>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/contato1.png" alt="contato" width="140" height="140"/>
              <h2>
                Nossas redes e contatos</h2>
              <p>Curta, compartilhe e se inscreva em nossas redes.</p>
              <p>
                <Link href="">
                  <a className="btn btn-secondary" href="{% url 'contatos' %}" role="button">Mais detalhes »</a>
                </Link>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
      </div>
    </>
  )
}
