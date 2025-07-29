import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Create from '../Components/Create'
import Read from '../Components/Read'
import ReadById from '../Components/ReadById';

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route exact path='/add-job' element={<Create />} />
            <Route path='/' element={<Read />} />
            <Route path='/job/:id' element={<ReadById />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing



