// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from "./navbar";
import PageHeadMeta from "./page_head_meta";
import Carrossel from "./carrossel";
import ScriptsBottom from "./scripts_bottom";
import Link from "next/link";


export default function Home() {
  return <>
  <PageHeadMeta></PageHeadMeta>

  <div className="container-fluid">
    <Navbar></Navbar>
    <Carrossel></Carrossel>

    {/* <!-- Conteúdo Principal do site --> */}
    <div className="container marketing">
      {/* <!-- Três colunas de texto --> */}
      <div className="row">
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/ajuda1.png" alt="ajuda" width="140" height="140" />
          <h2>Como ajudar?</h2>
          <p>Precisamos de você, verifique como ajudar.</p>
          <Link href="{% url 'ajuda' %}"><p><a className="btn btn-secondary" role="button">Mais detalhes »</a></p></Link>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/resgate1.png" alt="resgate" width="140" height="140"/>
          <h2>Blog Elos de Amor</h2>
          <p>Confira nosso blog com dicas e sugestões.</p>
          <Link href="{% url 'resgate' %}"><p><a className="btn btn-secondary"  role="button">Mais detalhes »</a></p></Link>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/contato1.png" alt="contato" width="140" height="140"/>
          <h2>
            Nossas redes e contatos</h2>
          <p>Curta, compartilhe e se inscreva em nossas redes.</p>
          <Link href="{% url 'contatos' %}"><p><a className="btn btn-secondary"  role="button">Mais detalhes »</a></p></Link>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </div>
  </div>
  <ScriptsBottom></ScriptsBottom>
  </>
}
