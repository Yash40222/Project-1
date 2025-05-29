import React from 'react';

export default function About() {
  const images = [
  {
    src: '/a.jpeg',
    alt: 'Indian bride in traditional attire smiling gracefully',
  },
  {
    src: '/b.jpeg',
    alt: 'Couple holding hands during wedding ceremony',
  },
  {
    src: '/h.avif',
    alt: 'Traditional Indian wedding celebration with fire ritual',
  },
  {
    src: '/hh.webp',
    alt: 'Bride and groom candid moment outdoors',
  },
  {
    src: '/e.jpg',
    alt: 'Cinematic shot of a bride looking outside the window',
  },
  {
    src: '/f.webp',
    alt: 'Beautiful wedding mandap at night',
  },
];

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 border-0">
        <h2 className="fw-bold text-center mb-4">About Vinay Films</h2>
        <p className="lead text-center mb-4">
          Established in 2010, Vinay Films is a premier photography and cinematography service based in Lucknow, Uttar Pradesh.
          Specializing in wedding films, birthday shoots, and official event coverage, we capture the essence of your most precious
          moments with creativity and heart.
        </p>
        <p className="text-center mb-4">
          Over the years, we’ve had the privilege of working with hundreds of families and businesses, crafting cinematic experiences
          that last a lifetime. Our team blends tradition with modern storytelling to deliver photos and videos that speak volumes.
        </p>
        <p className="text-center mb-5">
          Whether it’s the quiet emotion of a bride’s smile or the energy of a dance floor in full swing, Vinay Films turns your
          memories into a timeless film. Let’s make something beautiful together.
        </p>

        {/* Gallery Carousel */}
        <h3 className="fw-bold text-center mb-4">Let’s capture these beautiful moments</h3>
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner rounded">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img
                  src={image.src}
                  className="d-block w-100"
                  alt={image.alt}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
