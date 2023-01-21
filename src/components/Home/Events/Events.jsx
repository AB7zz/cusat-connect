import React from 'react'
import image1 from '../../../assets/images/events/1.jpeg'
import image2 from '../../../assets/images/events/2.jpeg'
import image3 from '../../../assets/images/events/3.jpeg'
import './style.css'

const images = [image1, image2, image3]

const Events = () => {
  return (
    <section id="tranding">
    <div className="container">
      <div className="swiper tranding-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image1} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image2} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image3} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image2} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image3} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image1} alt="Tranding" />
            </div>
          </div>
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src={image2} alt="Tranding" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Events