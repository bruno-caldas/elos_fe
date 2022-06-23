// import '../styles/globals.css'

import '../styles/bootstrap/css/bootstrap.min.css'
import '../styles/bootstrap/css/carousel.css'
import '../styles/bootstrap/css/blog.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/bootstrap/js/bootstrap.bundle.min.js'

import { useEffect } from "react";

import '../styles/style.css'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
          import("bootstrap/dist/js/bootstrap");
  },[])

  return <Component {...pageProps} />
}

export default MyApp
