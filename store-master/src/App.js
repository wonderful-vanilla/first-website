import React from 'react';
import { Route, Routes } from 'react-router-dom';//client-side routing ...browser history-Link, which is a component that can be used to create clickable links that navigate to specific routes....
import './App.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Shop from './pages/Shop/Shop';
import LoadingBar from 'react-top-loading-bar'
import  {useGlobalContext}  from './contexts/globalContext';//hook which to define state in a function instead of ina class
import Error from './components/Error/Error';
import SingleTypeProduct from './components/SingleTypeProduct/SingleTypeProduct';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Wishlist from './components/Wishlist/Wishlist';
import ContactMe from './components/ContactMe/ContactMe';
import { Search } from './components/Search/Search';//curly braces importing specific..
import About from './pages/About/About';
function App() { //ui for entire webpage

  let { loadingProgress, setLoadingProgress, themeState, } = useGlobalContext();//getting staate of all 3 values from globalcontext



  return (
    <>
      <NavigationBar />
      {/* <Navbar />  boy boy !  */}

      <LoadingBar
        color={themeState.color}
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)} //callback func... setting loading progress to 0..
        transitionTime={300} //duration of the animation that is used to transition the loading bar or spinner from one state to another.
        loaderSpeed={150} // speed at which the loading animation should run.
      />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='*' element={<Error />} />
        <Route path='/products/:category' element={<SingleTypeProduct />} />
        <Route path='/single-product-page/:product_id' element={<SingleProduct />} />
        <Route path='products/:type/single-product-page/:product_id' element={<SingleProduct />} />
        <Route path='products/single-product-page/:product_id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;