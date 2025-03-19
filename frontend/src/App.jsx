import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SubjectsGrid from './components/SubjectsGrid.jsx'
import Footer from './components/Footer.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import SessionDashboard from './components/SessionDashboard.jsx'
import TestHistoryDashboard from './components/TestHistoryDashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    {/* <Hero/>
    <SubjectsGrid/>
    <Footer/> */}
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    {/* <SessionDashboard/> */}
    <TestHistoryDashboard/>
    </>
  )
}

export default App
