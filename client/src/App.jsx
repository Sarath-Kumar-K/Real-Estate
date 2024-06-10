import React from 'react'
import './layout.scss'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App