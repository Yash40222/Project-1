import React, { useState } from 'react';
import './icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import copyright from './copyright';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(res.data.message);
      setEmail('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='abc'>
      <div className="container footer-background">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h4>Vinay Films</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About Us</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact Us</Link></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Coming Soon</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-5 mb-4">
              <form onSubmit={handleSubscribe}>
                <h4>Subscribe to Vinay Films</h4>
                <p>Subscribe to receive the latest updates and launches for free</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="abc@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
                {message && <p className="mt-2">{message}</p>}
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© {copyright()} Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis inst" href="#" aria-label="Instagram">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis face" href="#" aria-label="Facebook">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
