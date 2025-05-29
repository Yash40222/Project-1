import React from "react";
import ReactDOM from 'react-dom/client';
import abc from './abc.jpg';
function Heading()
{
    return(
     <>
     <small className="text-uppercase text-muted fw-bold" style={{ letterSpacing: "1px", paddingLeft: "1rem" }}>
       Capturing Emotions Since 2010
</small>

    <div className="hero-background">
      <div className="container-fluid px-2 pt-2 pb-0" style={{ maxWidth: "1100px" }}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 text-center">
  <img
  src={abc}
  className="hero-img d-block mx-auto img-fluid"
  alt="Vinay Films Work"
  style={{ maxWidth: "400px", height: "auto", marginTop: "-20px" }}
  loading="lazy"
/>

          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="hero-text">
              <h1 className="hero-title">Vinay Films</h1>
              <p className="hero-desc">
                Vinay Films has been a trusted name for over 10 years, specializing in
                capturing life’s most cherished moments. From grand wedding ceremonies
                to joyful birthday parties and important official events, we deliver
                high-quality videography and photography services that turn memories
                into timeless stories. Your moments matter—and we make sure they’re
                unforgettable.
              </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    
  

  </>
    );
}

export default Heading;