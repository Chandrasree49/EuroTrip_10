import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";

import "./AppSlider.css";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import { NavLink } from "react-router-dom";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        Autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-custom">
          <div className="slide-content " >
            <h1
              className="slide-title  "
              style={{
                
                fontWeight: "bold",
                fontSize: "48px",
               }}
            >
        Let's Travel To {" "}
        <span style={{ color: "#BD25C7", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Spain", "France", "Italy","England", "Switzerland!"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            </h1>
            <p
              className="slide text-center"
              style={{ fontSize: "18px" }}
            >
              
              <h1
                style={{
                  paddingTop: "1rem",
                  margin: "auto 0",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width:"800px",
                  marginTop:"10px"
                 
               
                }}
              >
               Europe boasts a wealth of historical sites, museums, and cultural experiences, making it an attractive destination for those interested in art, architecture, and history.
              </h1>
            </p>
          
            <img
              src="https://img.freepik.com/free-photo/aerial-view-city-by-water_23-2150893117.jpg?t=st=1714421565~exp=1714425165~hmac=c6aa0fe4819e10b788755b984c16dda2ac5b3008b7aebfa6cb0d37cc730b48b7&w=740"
              alt="Nature"
              className="slide-image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-custom">
          <div className="slide-content">
            <h5
              className="slide-title "
              style={{
                animationDuration: "6s",
                fontWeight: "bold",
                fontSize: "48px",
                textAlign:"center"
              }}
            >
             Let's Travel To {" "}
        <span style={{ color: "#BD25C7", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Spain", "France", "Italy","England", "Switzerland!"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            </h5>
            <h1
              className="slide  "
              style={{ fontSize: "18px",
              width:"800px",
              marginTop:"10px",
              fontWeight: "bold" }}
            >
            
              Europe is known for its iconic landmarks, such as the Eiffel Tower in Paris, the Colosseum in Rome, and the Acropolis in Athens, which are on the bucket list of many travelers.
            </h1>
           
            <img
              src="https://img.freepik.com/free-photo/night-city-view_1417-1728.jpg?t=st=1714473994~exp=1714477594~hmac=da75a272099419b63cd363cb7975c4d3d7a48ef4f5dcd81631973a22e4aacd95&w=1380"
              alt="Nature"
              className="slide-image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-custom">
          <div className="slide-content">
            <h5
              className="slide-title "
              style={{
                animationDuration: "12s",
                fontWeight: "bold",
                fontSize: "48px",
                
              }}
            >
             Let's Travel To {" "}
        <span style={{ color: "#BD25C7", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Spain", "France", "Italy","England", "Switzerland!"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            </h5>
            <h1
              className="slide"
              style={{  fontSize: "18px",
              width:"800px",
              marginTop:"10px",
              fontWeight: "bold"}}
            >
             Europe's well-developed transportation infrastructure, including trains and low-cost airlines, makes it relatively easy for Americans to explore multiple countries in a single trip.
            </h1>
            
            <img
              src="https://img.freepik.com/free-photo/low-angle-shot-colorful-fireworks-church-starry-evening_181624-34258.jpg?t=st=1714474139~exp=1714477739~hmac=3c2ab7666ed90acb76c7dfe4fb750f263c8a3809c938de7d452fbe458d785693&w=996"
              alt="Nature"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
