import Head from 'next/head'
import '../styles/globals.css'
import '../styles/bootstrap/css/bootstrap.min.css'
import '../styles/bootstrap/css/carousel.css'
import '../styles/bootstrap/css/blog.css'
import '../styles/style.css'

// tag meta: https://nextjs.org/docs/messages/no-document-viewport-meta

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* // <!-- Meta tags Obrigatórias --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Site do projeto Elos de Amor" />
        <meta name="author" content="Alunos UNIVESP - Eixo Computação - 2020" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
