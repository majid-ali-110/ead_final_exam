const TrafficLightSimulator = () => {
  return (
    <div className="traffic-light-container">
      <div className="light red"></div>
      <div className="light yellow"></div>
      <div className="light green"></div>

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
        }

        .light {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default TrafficLightSimulator;
