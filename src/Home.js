import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="CHARLY Atlas Men's Home Jersey 20-21."
            price={89.99}
            image="https://m.media-amazon.com/images/I/71WjGEaLMUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="49244111"
            title="Dragon Ball Super - Ultra Instinct Goku Limit Breaker 12 inch Figure"
            price={600.51}
            image="https://m.media-amazon.com/images/I/71dADOcpgWL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="15478963"
            title="Echo Dot (3rd Gen) with Clock with Mandalorian The Child stand"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg"
            rating={2}
          />
          <Product
            id="54786328"
            title="Ripple Junction Naruto Shippuden Ichiraku Ramen Shop Adult Long Sleeve Shirt"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61MsVsuAU6L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="12321341"
            title="Toilet Paper (Final Score 18 - 0)"
            price={-18.0}
            image="https://m.media-amazon.com/images/I/61uObp-1v0L._AC_UY218_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            id="17513392"
            title="Authentic Autographed Andres Guardado 11x14 Photo Autograph"
            price={951.92}
            image="https://m.media-amazon.com/images/I/61Ym+mf+MBL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
