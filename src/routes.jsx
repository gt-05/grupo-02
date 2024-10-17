import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements
 } from 'react-router-dom';

 import Home from './pages/HomePage'
 import ProductListingPage from './pages/ProductListingPage'
export default createBrowserRouter (
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<ProductListingPage/>}/>
        </>
    ) )