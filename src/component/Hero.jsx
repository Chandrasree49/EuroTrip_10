import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full" style={{ height: "600px" }}>
    <img src="https://img.freepik.com/free-photo/aerial-view-city-by-water_23-2150893117.jpg?t=st=1714421565~exp=1714425165~hmac=c6aa0fe4819e10b788755b984c16dda2ac5b3008b7aebfa6cb0d37cc730b48b7&w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full" style={{ height: "600px" }}>
    <img src="https://img.freepik.com/free-photo/parliament-budapest_1084-57.jpg?t=st=1714422204~exp=1714425804~hmac=7a29c119cbcaf9b473417808e829b19f87ba8209e7e0bfabd1e39643997b2685&w=996" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full"style={{ height: "600px" }}>
    <img src="https://img.freepik.com/free-photo/prague-castle-from-vltava-side_1398-2758.jpg?t=st=1714422442~exp=1714426042~hmac=6a0001fb514e4458f5917cdd16b599bdbaa14e5dd6feadb0aed929995afae57e&w=1060" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full"style={{ height: "600px" }}>
    <img src="https://img.freepik.com/free-photo/view-prague-by-night_268835-1129.jpg?t=st=1714422527~exp=1714426127~hmac=5bc124e414884bbf130acce3ecb8dfe9ea62f8f3cf6da7f1bfa90bfc8636f2a1&w=996" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero