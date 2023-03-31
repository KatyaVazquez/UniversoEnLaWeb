import React, { useState, useEffect } from 'react';
import "./NasaNews.css"

const NasaNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Lgb56Mt71marGsvjDGM4ukMTXbdmUxYpbffqNYwE&count=10');
      const data = await response.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div className='Container'>
      <h2>Latest NASA news and discoveries :</h2>
      <ul>
        {news.map((item) => (
          <li key={item.date}>
            <h3>{item.title}</h3>
            <img src={item.url} alt={item.title} />
            <p>{item.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaNews;
