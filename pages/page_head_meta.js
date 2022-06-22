import Head from 'next/head'
// import { Html, Head, Main, NextScript } from 'next/document'

export default function PageHeadMeta() {
  return <>
    <Head>
    <title>Projeto Elos de Amor</title>
    {/* // <!-- Meta tags Obrigatórias --> */}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Site do projeto Elos de Amor" />
    <meta name="author" content="Alunos da UNIVESP - Eixo Computação - 2020" />
    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link> */}

    {/* // <!-- Principal CSS do Bootstrap --> */}
    
    {/* // <!-- Icons Material Designer Google--> */}
    {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/> */}
    </Head>
      {/* Restante do CSS em styles/ */}
  </>
}