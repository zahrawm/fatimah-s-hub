
import React from 'react'
import './App.css'
import { Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          
        
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
