import React, { useState } from "react";
import './App.css'
import Header from "./components/Header/Header";
import Planet from "./components/Planet/Planet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Planets from "./components/Planets/Planets";
import APOD from "./components/APOD/APOD";
import RegisterForm from "./components/Register/RegisterForm";
import NasaNews from "./components/NoticiasAstro/NasaNews";
import LoginRegister from "./components/Pages/LoginRegister";
import AstronomyResources from "./components/Edu/AstronomyResources";
import CommentForm from './components/Feedback/CommentForm';





const App = () => {
  const [showed, setShowed] = useState(true)
  const closeMenu = () => {
    setShowed(false)
  }
  const updateMenu = () => {
    setShowed(!showed)
  }
  return (
  <div className="app">
    <Router>
      <div>
        <Header  updateMenu={updateMenu} showed={showed} />
        <Routes>
        <Route path="/"  exact element={<LoginRegister/>}></Route>
        <Route path="/AstroResources"  exact element={<AstronomyResources/>}></Route>
        <Route path="/News"  exact element={<NasaNews/>}></Route>
        <Route path="/Feedback"  exact element={<CommentForm/>}></Route>
        <Route path="/Register"  exact element={<RegisterForm/>}></Route>
          <Route path="/AstronomyPicture" exact element={<APOD/>}>
          </Route>
          <Route path="/planetas" exact element={<Planets updateMenu={closeMenu}/>}> </Route>
          <Route path="/neptuno" exact element={<Planet updateMenu={closeMenu} name="Neptuno" englishName={"neptune"}/>}>
          </Route>
          <Route path="/urano" exact element={<Planet updateMenu={closeMenu} name="Urano" englishName={"uranus"}/>}>
          </Route>
          <Route path="/saturno" exact element={<Planet updateMenu={closeMenu} name="Saturno" englishName={"saturn"}/>}>
          </Route>
          <Route path="/jupiter" exact element={<Planet updateMenu={closeMenu} name="Jupiter" englishName={"jupiter"}/>}>
          </Route>
          <Route path="/marte" exact element={<Planet updateMenu={closeMenu} name="Marte" englishName={"mars"}/>}>
          </Route>
          <Route path="/tierra" exact element={<Planet updateMenu={closeMenu} name="Tierra" englishName={"earth"}/>}>
          </Route>
          <Route path="/venus" exact element={<Planet updateMenu={closeMenu} name="Venus" englishName={"venus"}/>}>
          </Route>
          <Route path="/mercurio" exact element={<Planet updateMenu={closeMenu} name="Mercurio" englishName={"mercury"}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    
  </div>
)};

export default App;
