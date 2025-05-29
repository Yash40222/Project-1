import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Choose() {
  return (
    <>
      <h2 className="mb-4 text-center fw-bold">Why Choose Us</h2>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div className="list-group">

          {/* Experienced Professionals */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-people-fill fs-5"></i>
            </div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Experienced Professionals</h6>
                <p className="mb-0 opacity-75">Over a decade of capturing unforgettable moments with expertise and creativity.</p>
              </div>
              <small className="opacity-50 text-nowrap">Now</small>
            </div>
          </a>

          {/* Cutting-edge Equipment */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-camera-video-fill fs-5"></i>
            </div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Cutting-edge Equipment</h6>
                <p className="mb-0 opacity-75">We use the latest cameras and drones to ensure cinematic quality.</p>
              </div>
              <small className="opacity-50 text-nowrap">1d</small>
            </div>
          </a>

          {/* Personalized Packages */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-gift-fill fs-5"></i>
            </div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Personalized Packages</h6>
                <p className="mb-0 opacity-75">Tailored services to fit your style, story, and budget.</p>
              </div>
              <small className="opacity-50 text-nowrap">2d</small>
            </div>
          </a>

          {/* Friendly & Professional Crew */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-person-hearts fs-5"></i>
            </div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Friendly & Professional Crew</h6>
                <p className="mb-0 opacity-75">We don’t just film—we connect, communicate, and make everyone feel camera-ready and comfortable.</p>
              </div>
              <small className="opacity-50 text-nowrap">2d</small>
            </div>
          </a>

          {/* Drone & Aerial Coverage */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-airplane-engines fs-5"></i>
            </div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Drone & Aerial Coverage</h6>
                <p className="mb-0 opacity-75">We bring your venue to life with sweeping cinematic drone shots—because every angle matters.</p>
              </div>
              <small className="opacity-50 text-nowrap">2d</small>
            </div>
          </a>

        </div>
      </div>
    </>
  );
}

export default Choose;
