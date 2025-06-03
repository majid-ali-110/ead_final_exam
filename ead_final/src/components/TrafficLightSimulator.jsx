import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'yellow';
        if (prev === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>

      <style jsx>{`
        .traffic-light-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          width: 120px;
          height: 320px;
          background-color: #333;
          border-radius: 10px;
          padding: 20px 0;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .light {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #555;
          transition: 
            background-color 0.5s ease, 
            box-shadow 0.5s ease;
        }

        .red.active {
          background-color: #ff4d4d;
          box-shadow: 0 0 20px 10px rgba(255, 0, 0, 0.5);
        }

        .yellow.active {
          background-color: #ffff4d;
          box-shadow: 0 0 20px 10px rgba(255, 255, 0, 0.5);
        }

        .green.active {
          background-color: #4dff4d;
          box-shadow: 0 0 20px 10px rgba(0, 255, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default TrafficLightSimulator;
