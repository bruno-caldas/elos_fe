import Head from 'next/head'

export default function PageHeadMeta() {
  return <>
    <Head>
    <title>Projeto Elos de Amor</title>
    {/* // <!-- Meta tags Obrigatórias --> */}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Site do projeto Elos de Amor" />
    <meta name="author" content="Alunos da UNIVESP - Eixo Computação - 2020" />
    {/* // <!-- Principal CSS do Bootstrap --> */}
    
    {/* // <!-- Icons Material Designer Google--> */}
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    </Head>
  </>
}