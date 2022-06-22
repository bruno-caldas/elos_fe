import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Carrossel() {
  return <>

    {/* <!-- Carrossel --> */}
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade mt-4" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="univesp-kaotinho img-fluid" src="https://piunivesp.s3.sa-east-1.amazonaws.com/elos_de_amor/media/elos_univesp.png" alt="Primeiro Slide"/> 
          <div className="carousel-caption d-sd-block">
            <p>Elos de Amor e UniVESP</p>
            <p>
              <Link href="abrigo"><><a className="btn btn-lg btn-secondary" role="button">Saiba mais</a></></Link>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          
          <img className="d-block h-100 w-100 d-inline-block img-carrossel" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/parceiros3.svg" alt="Segundo Slide"/>
          <div className="carousel-caption d-sd-block">
            <p>Nossos Parceiros</p>
            <p>
              <Link href="parceiros"><><a className="btn btn-lg btn-secondary" role="button">Confira</a></></Link>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block h-100 w-100 d-inline-block img-carrossel" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/eventos3.svg" alt="Terceiro Slide"/>
          <div className="carousel-caption d-sd-block">
            <p>Projetos e Eventos</p>
            <p>
              <Link href="eventos"><><a className="btn btn-lg btn-secondary" role="button">Participe</a></></Link>
            </p>
          </div>
        </div>
      </div>
      <Link href="#carouselExampleIndicators" ><><a className="carousel-control-prev" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a></></Link>
      <Link href="#carouselExampleIndicators"><a className="carousel-control-next" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a></Link>
    </div>
    {/* <!--Fim Carrossel --> */}
  </>
}