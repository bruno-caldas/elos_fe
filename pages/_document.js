import { Html, Head, Main, NextScript } from 'next/document'

// stylesheet: https://nextjs.org/docs/messages/no-stylesheets-in-head-component

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* // <!-- Principal CSS do Bootstrap --> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        {/* // <!-- Icons Material Designer Google--> */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}