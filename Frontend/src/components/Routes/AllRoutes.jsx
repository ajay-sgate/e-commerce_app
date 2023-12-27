import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/Homepage'
import SingleProductPage from '../../Pages/SingleProductPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/product/:id' element={<SingleProductPage />} />
        </Routes>
    )
}

export default AllRoutes