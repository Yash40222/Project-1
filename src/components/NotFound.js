// NotFoundAnimated.jsx
import React from 'react';
import './NotFound.css';

export default function NotFound() {
  const stars1 = Array.from({ length: 30 });
  const stars2 = Array.from({ length: 30 });
  const birds = Array.from({ length: 6 });

  return (
    <>
      <div className="container container-star">
        {stars1.map((_, i) => (
          <div className="star-1" key={`s1-${i}`} />
        ))}
        {stars2.map((_, i) => (
          <div className="star-2" key={`s2-${i}`} />
        ))}
      </div>

      <div className="container container-bird">
        {birds.map((_, i) => (
          <div className="bird bird-anim" key={i}>
            <div className="bird-container">
              <div className="wing wing-left">
                <div className="wing-left-top" />
              </div>
              <div className="wing wing-right">
                <div className="wing-right-top" />
              </div>
            </div>
          </div>
        ))}

        <div className="container-title">
          <div className="title">
            <span className="number">4</span>
            <div className="moon">
              <div className="face">
                <div className="mouth"></div>
                <div className="eyes">
                  <div className="eye-left"></div>
                  <div className="eye-right"></div>
                </div>
              </div>
            </div>
            <span className="number">4</span>
          </div>
          <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
          <button onClick={() => window.history.back()}>Go back</button>
        </div>
      </div>
    </>
  );
}
