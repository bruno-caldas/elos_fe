import Link from "next/link";
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function test() {
  const product = {
    images:[
      "https://piunivesp.s3.sa-east-1.amazonaws.com/elos_de_amor/media/elos_univesp.png",
      "https://piunivesp.s3.sa-east-1.amazonaws.com/media/parceiros3.svg",
      "https://piunivesp.s3.sa-east-1.amazonaws.com/media/eventos3.svg",
      ],
    title:["Elos de Amor e UniVESP", "Confira", "Participe"],
    subtitle:["Saiba mais", "Nossos Parceiros", "Projetos e Eventos"],
    size:[
      [650, 200],
      [650, 200],
      [650, 200],
    ],
  };

  return <>
  <Carousel
    axis="horizontal"
    infiniteLoop={true}
    autoPlay={true}
    swipeable={true}
    // renderThumbs={() =>
    //   product.images.map((img, idx) => (
    //     <div key={idx} className="w-full h-20 relative">
    //       <Image
    //         src={img}
    //         layout="fill"
    //         objectFit="contain"
    //         alt="logo"
    //       ></Image>
    //     </div>
    //   ))
    // }
    showArrows={true}
    showThumbs={false}
  >
    {product.images.length !== 0 &&
      product.images.map((img, idx) => (
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade mt-4" data-ride="carousel" key={idx}>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      <div className="carousel-inner">
        <Image
          // key={idx}
          src={img}
          alt={`${product.title} preview ${idx}`}
          // layout="fill"
          layout="responsive"
          width={product.size[idx][0]}
          height={product.size[idx][1]}
          priority={idx === 0}
        ></Image>
        <div className="carousel-caption d-sd-block">
        <p>{product.title[idx]}</p>
        <p>
          <Link href="abrigo"><><a className="btn btn-lg btn-secondary" role="button">{product.subtitle[idx]}</a></></Link>
        </p>
        </div>
      </div>
      </div>
      ))}
  </Carousel>
  </>
}