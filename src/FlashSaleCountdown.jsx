import React, { useState, useEffect } from 'react';

function FlashSaleCountdown({ endTime, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [saleEnded, setSaleEnded] = useState(false);

  function getTimeLeft() {
    const total = new Date(endTime) - new Date();
    return {
      total,
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = getTimeLeft();
      if (updatedTime.total <= 0) {
        clearInterval(timer);
        setSaleEnded(true);
        onEnd && onEnd(); // optional callback
      } else {
        setTimeLeft(updatedTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onEnd]);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
      {saleEnded ? (
        <span>⚠️ Flash Sales Ended</span>
      ) : (
        <span>
          {format(timeLeft.hours)}:{format(timeLeft.minutes)}:
          {format(timeLeft.seconds)} left
        </span>
      )}
    </div>
  );
}

export default FlashSaleCountdown;

