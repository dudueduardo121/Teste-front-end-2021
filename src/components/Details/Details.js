import React from 'react'
import './style.scss'
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="containerSobre">
          <div className="return">
              <a href="/">
                <FontAwesomeIcon className="icon" icon={faArrowLeft}/>
                <h2>
                  Voltar
                </h2>
              </a>

          </div>
        <Slider {...settings}>
          <div className="sliderSobre">
            <img src="slider1.svg" alt=""/>
          </div>
          <div className="sliderSobre">
            <img src="slider3.svg" alt=""/>
          </div>
          <div className="sliderSobre">
            <img src="slider4.svg" alt=""/>
          </div>
        </Slider>
        <div className="contentSobre">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime, fugit saepe vel maiores velit, magnam nisi non a odio minima rem placeat voluptates nihil molestiae molestias. Ducimus, asperiores dignissimos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam eius dolorum quaerat amet odit, nesciunt veritatis rerum nulla pariatur sunt omnis alias molestiae repellendus ut sequi soluta ea? Temporibus?
              </p>
              <div className="contentButton">
                <h2><span>R$</span> 40,00</h2>
                <a href="/">
                  habilitar
                </a>
              </div>
        </div>
  </div>
  )
}
