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
          <div className="slide-content">
            <h1
              className="slide-title animate__animated animate__fadeInRight"
              style={{
                animationDuration: "2s",
                fontWeight: "bold",
                fontSize: "48px",
              }}
            >
              Dream Home
            </h1>
            <p
              className="slide animate__animated  animate__fadeInLeft"
              style={{ animationDuration: "2s", fontSize: "18px" }}
            >
              {" "}
              <h1
                style={{
                  paddingTop: "1rem",
                  margin: "auto 0",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Life is simple{" "}
                <span style={{ color: "green", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Eat", "Sleep", "Travel", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </p>
            <NavLink to="/ErrorPage">
              <button
                className="slidebtn  animate__animated  animate__fadeInRight btn btn-active"
                style={{
                  animationDuration: "2s",
                  background: "rgb(23, 152, 175)",
                  border: "blue",
                  marginLeft: "3%",
                }}
              >
                explore
              </button>
            </NavLink>
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
              className="slide-title animate_animated animate__fadeInRight"
              style={{
                animationDuration: "6s",
                fontWeight: "bold",
                fontSize: "48px",
              }}
            >
              Dream Home
            </h5>
            <p
              className="slide animate__animated  animate__fadeInLeft"
              style={{ animationDuration: "6s", fontSize: "18px" }}
            >
              {" "}
              Home is where we find solace in <br></br>the familiar, celebrate
              life's milestones.{" "}
            </p>
            <NavLink to="/ErrorPage">
              <button
                className="slidebtn animate__animated  animate__fadeInRight btn btn-active"
                style={{
                  animationDuration: "8s",
                  background: "rgb(23, 152, 175)",
                  border: "blue",
                  marginLeft: "3%",
                }}
              >
                explore
              </button>
            </NavLink>
            <img
              src="https://img.freepik.com/free-photo/parliament-budapest_1084-57.jpg?t=st=1714422204~exp=1714425804~hmac=7a29c119cbcaf9b473417808e829b19f87ba8209e7e0bfabd1e39643997b2685&w=740"
              alt="Nature"
              className="slide-image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-custom">
          <div className="slide-content">
            <h5
              className="slide-title animate_animated animate__fadeInRight"
              style={{
                animationDuration: "12s",
                fontWeight: "bold",
                fontSize: "48px",
              }}
            >
              Dream Home
            </h5>
            <p
              className="slide animate__animated  animate__fadeInLeft"
              style={{ animationDuration: "12s", fontSize: "18px" }}
            >
              {" "}
              Home is where we find solace in <br></br>the familiar, celebrate
              life's milestones.
            </p>
            <NavLink to="/ErrorPage">
              <button
                className="slidebtn animate__animated animate__fadeInRight btn btn-active"
                style={{
                  animationDuration: "14s",
                  background: "rgb(23, 152, 175)",
                  border: "blue",
                  marginLeft: "3%",
                }}
              >
                explore
              </button>
            </NavLink>
            <img
              src="https://img.freepik.com/free-photo/prague-castle-from-vltava-side_1398-2758.jpg?t=st=1714422442~exp=1714426042~hmac=6a0001fb514e4458f5917cdd16b599bdbaa14e5dd6feadb0aed929995afae57e&w=740"
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
