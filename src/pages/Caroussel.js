import React from 'react';
import Menu from '../Menu';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../images/Adidas.webp";
import images1 from "../images/Aire.webp";
import images2 from "../images/DeltaBlack.webp";
import images3 from "../images/Nike.webp";
import images4 from "../images/Sneaker.webp";
function Caroussel(props) {
    const responsive={
        superLargeDesktop:{
        breakpoint:{
          max:4000,min:3000},
          items:5
      },
      desktop:{
        breakpoint:{max:3000,min:1024},
        items:3
      },
      tablet:{
        breakpoint:{max:1024,min:464},
        items:2
      },
      mobile:{
        breakpoint:{max:464,min:0},
        items:1
      }
    };
    return (
        <div>
            <Menu/>
            <h1>React multi carousel </h1>
     <Carousel responsive={responsive}>
      <div>
        <h2>Adidas</h2>
        <img className="product--image" src={images} alt="chaussure Adidas"/>
        <p className="price">100 €</p>
        <p>Chaussure de sport</p>
        <p>
          <button>Ajouter au panier</button>
        </p>
      </div>
      <div>
        <h2>nike Air</h2>
        <img className="product--image" src={images1} alt="chaussure nike air"/>
        <p className="price">100 €</p>
        <p>Chaussure de sport</p>
        <p>
          <button>Ajouter au panier</button>
        </p>
      </div>
      <div>
        <h2>Delta Black</h2>
        <img className="product--image" src={images2} alt="chaussure Delta Black"/>
        <p className="price">100 €</p>
        <p>Chaussure de sport</p>
        <p>
          <button>Ajouter au panier</button>
        </p>
      </div>
      <div>
        <h2>Nike</h2>
        <img className="product--image" src={images3} alt="chaussure Nike"/>
        <p className="price">100 €</p>
        <p>Chaussure de sport</p>
        <p>
          <button>Ajouter au panier</button>
        </p>
      </div>
      <div>
        <h2>Sneaker </h2>
        <img className="product--image" src={images4} alt="chaussure Sneaker"/>
        <p className="price">100 €</p>
        <p>Chaussure de sport</p>
        <p>
          <button>Ajouter au panier</button>
        </p>
      </div>
     </Carousel>
            

        </div>
    );
}

export default Caroussel;