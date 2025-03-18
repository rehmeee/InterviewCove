import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    </>
  )
}

export default App
