import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Planets.css'


const planets = [
  {name: 'Mercurio'},
  {name: 'Venus'},
  {name: 'Tierra'},
  {name: 'Marte'},
  {name: 'Jupiter'},
  {name: 'Saturno'},
  {name: 'Urano'},
  {name: 'Neptuno'}
]

const Planets = ({updateMenu}) => {

  
  useEffect( () => {
    updateMenu()
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, [])

  return (
    <div className="bg-image">
      <div className='wrapper planets'>
        {planets.map(planet => {
          return (<div key={planet.name} className="planet-individual">
            <h1>{planet.name}</h1>
            <div className="img">
              <img loading="lazy" src= {`img/${planet.name.toLowerCase()}.png`} alt={planet.name} />
            </div>
            <div className="link">
              <Link className="nav-a planet-a" 
              to={`/${planet.name.toLowerCase()}`}>Details</Link>
            </div>
          </div>)
        })}
      </div>
    </div>
  )

}

export default Planets
