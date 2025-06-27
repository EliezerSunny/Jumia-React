import React, { useEffect, useRef, useState } from 'react';


const FlashSalesCarousel = () => {
const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % 5);  // since we have 3 slides
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => clearInterval(autoPlayRef.current)}
      onMouseLeave={() => (autoPlayRef.current = setInterval(nextSlide, 4000))}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out p-2"
        style={{
          width: '100%',
          transform: `translateX(-${current * 97}%)`,
        }}
      >
        {/* Slide 1 */}
        <div className="w-full flex-shrink-0 p-2">
          <img
            src="/img/11-11_660x330v2.jpg"
            alt="Flash Sales"
            className="w-full"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-full flex-shrink-0 p-2">
          <img
            src="/img/ms__660x330_copy_3.png"
            alt="Mega Deals"
            className="w-full"
          />
        </div>

        {/* Slide 3 */}
        <div className="w-full flex-shrink-0 p-2">
          <img
            src="/img/ms.jpg"
            alt="Home Deals"
            className="w-full"
          />
        </div>

        {/* Slide 4 */}
        <div className="w-full flex-shrink-0 p-2">
          <img
            src="/img/mobileslider.jpg"
            alt="Mega Deals"
            className="w-full"
          />
        </div>

        {/* Slide 5 */}
        <div className="w-full flex-shrink-0 p-2">
          <img
            src="/img/mobileslider_copy_8.jpg"
            alt="Home Deals"
            className="w-full"
          />
        </div>

      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          onClick={() => setCurrent(0)}
          className={`w-3 h-3 rounded-full ${current === 0 ? 'bg-white' : 'bg-white/50'}`}
        ></button>
        <button
          onClick={() => setCurrent(1)}
          className={`w-3 h-3 rounded-full ${current === 1 ? 'bg-white' : 'bg-white/50'}`}
        ></button>
        <button
          onClick={() => setCurrent(2)}
          className={`w-3 h-3 rounded-full ${current === 2 ? 'bg-white' : 'bg-white/50'}`}
        ></button>
        <button
          onClick={() => setCurrent(3)}
          className={`w-3 h-3 rounded-full ${current === 3 ? 'bg-white' : 'bg-white/50'}`}
        ></button>
        <button
          onClick={() => setCurrent(4)}
          className={`w-3 h-3 rounded-full ${current === 4 ? 'bg-white' : 'bg-white/50'}`}
        ></button>
      </div>

      {/* Navigation */}
      {/* <button
        onClick={() => setCurrent((current - 1 + 3) % 3)}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center"
      >
        ❯
      </button> */}

    </div>
  );
};

export default FlashSalesCarousel;
