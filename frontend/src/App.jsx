import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SubjectsGrid from './components/SubjectsGrid.jsx'
import Footer from './components/Footer.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import SessionDashboard from './components/SessionDashboard.jsx'
import TestHistoryDashboard from './components/TestHistoryDashboard.jsx'
import Home from './components/Home.jsx'
import StartSession  from './components/StartSession.jsx'
import JoinSession from './components/JoinSession.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/session:subject' element={<SessionDashboard/>}/>
    <Route path='/session:history' element={<TestHistoryDashboard/>}/>
    <Route path='/start-session' element={<StartSession/>}/>
    <Route path="/join-session" element={<JoinSession />} />
    </Routes>
   
    
  
    </>
  )
}

export default App
