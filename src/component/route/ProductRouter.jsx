import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../Product/CreateProduct'
import ReadAllProduct from '../Product/ReadAllProduct'
import ProductDetails from '../Product/ProductDetails'
import UpdateProduct from '../Product/UpdateProduct'

const ProductRouter = () => {
  return (
    <div>
      <Routes>
      <Route path='/create' element={<CreateProduct/>}></Route>
        <Route path='/' element={<ReadAllProduct/>}></Route>
        <Route path='/:id' element={<ProductDetails/>}></Route>
        <Route path='/update/:id' element={<UpdateProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default ProductRouter

