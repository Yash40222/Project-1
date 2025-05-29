import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Features() {
  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Our Services:</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          {/* Feature 1 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-pencil-square" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">Cinematic Wedding Films</h3>
            <p>Capture every emotional beat, from teary-eyed vows to crazy dance floors — all edited with color grading, drone footage, and storytelling finesse worthy of the big screen.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-camera-video" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">Event Coverage for All Occasions</h3>
            <p>From birthdays to corporate events, Vinay Films ensures crisp, professional visuals that preserve every detail with zero compromise on quality.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-heart" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">Creative Pre-Wedding Shoots</h3>
            <p>Custom themes, dreamy locations, and expert direction — because your love story deserves a trailer as epic as the movie.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 4 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-magic" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">High-End Editing & Retouching</h3>
            <p>Polished post-production with cutting-edge tools: flawless skin, vibrant colors, cinematic transitions — your memories, turned masterpiece.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 5 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-award" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">10+ Years of Trusted Excellence</h3>
            <p>A decade of lenses, lights, and love. Vinay Films has earned its reputation through consistency, creativity, and countless satisfied clients.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 6 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-vector-pen" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">Personalized Concept Planning</h3>
            <p>Every event is unique — so is your coverage. From scriptwriting for wedding trailers to matching your brand vibe in corporate shoots, we plan it your way.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

          {/* Feature 7 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <div style={{
                width: "1.7em",
                height: "1.7em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0d6efd",
                borderRadius: "0.1em",
                color: "white"
              }}>
                <i className="bi bi-box-seam" style={{ fontSize: "1.2em" }}></i>
              </div>
            </div>
            <h3 className="fs-2 text-body-emphasis">Elegant Album & Gift Packaging</h3>
            <p>Beyond digital delivery, we offer handcrafted photo albums, luxury pen drives, and memory boxes — perfect for gifting or treasuring those once-in-a-lifetime moments.</p>
            <a href="#" className="icon-link">
              <svg className="bi" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
