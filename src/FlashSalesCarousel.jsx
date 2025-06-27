import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    src: '/img/11-11_660x330v2.jpg',
    alt: 'Flash Sales',
  },
  {
    src: '/img/ms__660x330_copy_3.png',
    alt: 'Mega Deals',
  },
  {
    src: '/img/ms.jpg',
    alt: 'Home Deals',
  },
  {
    src: '/img/mobileslider.jpg',
    alt: 'Mobiles Promo',
  },
  {
    src: '/img/mobileslider_copy_8.jpg',
    alt: 'Final Sale',
  },
];

const FlashSalesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const pauseAutoplay = () => clearInterval(autoPlayRef.current);
  const resumeAutoplay = () => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Slide Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 p-2 flex items-center justify-center bg-white">
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-full w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        ❯
      </button>
    </div>
  );
};

export default FlashSalesCarousel;
