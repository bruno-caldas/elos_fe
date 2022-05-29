
export default function Carrossel() {
  return <>

    {/* <!-- Carrossel --> */}
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade mt-4" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="univesp-kaotinho img-fluid" src="https://piunivesp.s3.sa-east-1.amazonaws.com/elos_de_amor/media/elos_univesp.png" alt="Primeiro Slide"/> 
          <div class="carousel-caption d-sd-block">
            <p>Elos de Amor e UniVESP</p>
            <p>
              <a class="btn btn-lg btn-secondary" href="{% url 'abrigo' %}" role="button">Saiba mais</a>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          
          <img class="d-block h-100 w-100 d-inline-block img-carrossel" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/parceiros3.svg" alt="Segundo Slide"/>
          <div class="carousel-caption d-sd-block">
            <p>Nossos Parceiros</p>
            <p>
              <a class="btn btn-lg btn-secondary" href="{% url 'parceiros:parceiros' %}" role="button">Confira</a>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block h-100 w-100 d-inline-block img-carrossel" src="https://piunivesp.s3.sa-east-1.amazonaws.com/media/eventos3.svg" alt="Terceiro Slide"/>
          <div class="carousel-caption d-sd-block">
            <p>Projetos e Eventos</p>
            <p>
              <a class="btn btn-lg btn-secondary" href="{% url 'eventos:eventos' %}" role="button">Participe</a>
            </p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
    {/* <!--Fim Carrossel --> */}
  </>
}