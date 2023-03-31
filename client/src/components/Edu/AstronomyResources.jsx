import React from 'react';
import './AstronomyResources.css';

function AstronomyResources() {
  return (
    <div className="astronomy-resources">
      <h2>Astronomy Resources</h2>
      <div className="resource">
        
        <div className="resource-info">
          <h3>International Space Station</h3>
          <p>The International Space Station (ISS) is a habitable artificial satellite in low Earth orbit. Its first component launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date.</p>
          <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noreferrer">Learn more</a>
        </div>
      </div>
      <div className="resource">
        
        <div className="resource-info">
          <h3>Hubble Space Telescope</h3>
          <p>The Hubble Space Telescope is a large telescope in space. It was launched into orbit in 1990 and has been taking pictures of the universe ever since. Its images have helped scientists learn more about the universe and have also been used in countless books, articles, and documentaries.</p>
          <a href="https://www.nasa.gov/mission_pages/hubble/main/index.html" target="_blank" rel="noreferrer">Learn more</a>
        </div>
      </div>
      <div className="resource">
        
        <div className="resource-info">
          <h3>Whirlpool Galaxy</h3>
          <p>The Whirlpool Galaxy is a spiral galaxy located about 23 million light-years away from Earth. It is one of the most famous galaxies in the sky and has been studied extensively by astronomers. Its distinctive spiral arms and bright core make it a popular target for amateur and professional astronomers alike.</p>
          <a href="https://www.nasa.gov/mission_pages/hubble/images/index.html"  target="_blank" rel="noreferrer">Learn more</a>
        </div>

        <div className="resource-info">
          <h3>Probing Seven Worlds with NASA's James Webb Space Telescope</h3>
          <p>This rendering of the James Webb Space Telescope is current to 2015. Upon request we can provide a high-resolution image without a background.</p>
          <a href="https://www.nasa.gov/feature/goddard/2017/probing-seven-worlds-with-nasas-james-webb-space-telescope"  target="_blank" rel="noreferrer">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default AstronomyResources;
