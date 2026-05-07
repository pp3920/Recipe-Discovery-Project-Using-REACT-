import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Components/HomePage'
import { Route,Routes } from 'react-router-dom';
import RecepieDetail from './Components/RecepieDetail'

function App() {
  
   //  <HomePage />

  return (
    <>
    <Routes>
      <Route path='/' element = {<HomePage />} />  
      <Route path='/:mealid' element = {<RecepieDetail />} />
    </Routes>
    </>
  )
}

export default App
