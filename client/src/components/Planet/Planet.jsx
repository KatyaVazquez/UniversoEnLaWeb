import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import CommentForm from '../Feedback/CommentForm';
import getPlanetData from '../../utilities/getPlanetData'
import './Planet.css'
const Planet = ({englishName, name, updateMenu}) => {
  const [comments, setComments] = useState([]);

  const fahrenheitToCelsius = fahrenheit => (fahrenheit);
  const [submitted, setSubmitted] = useState(false);
  const updateData = (data) => {
    let {name, avgTemp, perihelion, aphelion, moons, mass, density, gravity, discoveredBy, discoveryDate} = data

    avgTemp = fahrenheitToCelsius(avgTemp).toFixed(2)
    const moonsNumber = moons && moons.length

    mass = mass.massValue

    const planetInfo = {
      name,
      avgTemp,
      perihelion,
      aphelion,
      moonsNumber,
      mass,
      density,
      gravity,
      discoveredBy,
      discoveryDate
    }

    setPlanetData(planetInfo)
  }
 
 
  const [planetData, setPlanetData] = useState({})

  useEffect( () => {
    getPlanetData(englishName)
      .then(
        updateData
      ).catch((error)=> console.log(error))
    updateMenu()
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    
  }, [name])


  return (
    <main className="planet">
      <div className="wrapper d-grid two-columns rs">
        <div className="planet-data">
          <h2 className="only-mobile mb-20">
            {name}
          </h2>
          <div className="planet-img">
            <img src={`img/${name.toLowerCase()}.png`} alt="Imagen sobre neptuno" />
            <div className="planet-info one">
              <p><span className="mt-0"> {planetData.avgTemp} K </span></p>
            </div>
            <div className="planet-info two">
              <p>Minimun distance to the Sun: <span> {planetData.perihelion} </span> </p>
            </div>
            <div className="planet-info three">
              <p>Maximun distance to the Sun: <span> {planetData.aphelion}  </span> </p>
            </div>
          </div>
        </div>
        <div className="extra-data">
          <h1 className='heading-1 t-s only-desktop'> {name}</h1>
          <p className="center-content t-s tac">
            <Icon icon="emojione:full-moon" color="white" width="40" height="40" />
            <span className="ml-10 t-s">It has <b>{planetData.moonsNumber || 0}</b> {planetData.moonsNumber === 1 ? 'moon' : 'moons'} </span>
          </p>
          <div className="grid-info">
            <div className="item">
              <p><Icon icon="fa-solid:weight-hanging" width="30px" height="30px" /></p>
              <p>Mass</p>
              <p>{planetData.mass}</p>
            </div>
            <div className="item">
              <p><Icon icon="fa6-solid:person-falling" width="30px" height="30px" /></p>
              <p>Gravity</p>
              <p>{planetData.gravity}</p>
            </div>
            <div className="item">
              <p><Icon icon="fluent:text-density-16-filled" width="30px" height="30px" /></p>
              <p>Density</p>
              <p>{planetData.density}</p>
            </div>
          </div>
            {planetData.discoveredBy != "" && (
              <div className="discovered">
                <Icon icon="entypo:magnifying-glass" width="60px" height="60px"/>
                <p>
                Discovered by {planetData.discoveredBy} the {planetData.discoveryDate}
                </p>
              </div>
            )}
        </div>
      </div>
    </main>
  )
}

export default Planet