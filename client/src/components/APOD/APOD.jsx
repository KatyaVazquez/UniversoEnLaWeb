import React, { useState, useEffect } from 'react';
import './APOD.css';

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=rlIYaKbGMQ0REmb5f0IzacY0aTpJzYbnv10Ep3yl');
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchApodData();
  }, []);

  const handleHover = () => {
    setIsHovering(true);
  }

  const handleLeave = () => {
    setIsHovering(false);
  }

  return (
    <div className="apod-container">
      {apodData && (
        <img
          src={apodData.url}
          alt={apodData.title}
          className={isHovering ? "apod-image expanded" : "apod-image"}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      )}
      {apodData && <p>{apodData.title}</p>}
      {apodData && <p>{apodData.explanation}</p>}
    </div>
  );
};

export default APOD;
