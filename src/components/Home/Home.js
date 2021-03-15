import React from 'react'
import './style.scss'
import Slider from "react-slick";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faArrowDown} from '@fortawesome/free-solid-svg-icons'


const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  cssEase: "linear"
};

export default function Home() {


  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="bannerSlider">
          <img src="logo4.svg" alt="" />
          <div className="content">
            <h2>Curso Html </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur! Eos, nesciunt temporibus voluptate voluptatem quas voluptates unde.
            </p>
            <div className="textButton">
              <h3><span>R$</span> 60</h3>
              <a href="/Details">Saiba mais</a>
            </div>
          </div>
        </div>
        <div className="bannerSlider">
          <img src="logo-05.svg" alt="" />
            <div className="content">
              <h2>Curso React js</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur! Eos, nesciunt temporibus voluptate voluptatem quas voluptates unde.
              </p>
              <div className="textButton">
                <h3><span>R$</span> 80</h3>
                <a href="/Details">Saiba mais</a>
              </div>
            </div>
        </div>
      </Slider>
    </div>
  )
}
