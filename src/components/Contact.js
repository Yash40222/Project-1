import React from 'react';

export default function Contact() {
  return (
    <>
      <h2 className="fw-bold mb-5 text-center romeo">Get in Touch with Vinay Films</h2>
      <p className="text-center mb-5">We’d love to hear from you — whether it’s about collaborations, film inquiries, or just a good old chat about cinema.</p>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <i className="bi bi-geo-alt fs-1 text-primary"></i>
            <h5 className="mt-3">Our Studio</h5>
            <p>Lucknow, UttarPradesh<br />India - 226001</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <i className="bi bi-envelope fs-1 text-success"></i>
            <h5 className="mt-3">Email Us</h5>
            <p>vinaychaurasia454@gmail.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <i className="bi bi-telephone fs-1 text-danger"></i>
            <h5 className="mt-3">Call Us</h5>
            <p>+91 93368 90420</p>
          </div>
        </div>
      </div>

      <div className="ratio ratio-16x9 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.800792580656!2d80.92428777600102!3d26.896967160765993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a940211%3A0x6558e61d84775630!2sRaghav%20Vihar%20Colony!5e1!3m2!1sen!2sin!4v1748420351956!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
