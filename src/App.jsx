import './App.css'
import Banner from './components/banner/Banner'
import Navber from './components/navber/Navber'
import Start from './components/star/start'
import Heading from './components/products/Heading'
import Product from './components/products/Product'
import { useEffect, useState } from 'react'
import GetStart from './components/getStart/GetStart'
import Pricing from './components/pricing/pricing'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() =>{
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  return (

    <>
      <Navber cartCount={cart.length} setShowCart={setShowCart} />
      <Banner />
      <Start />
      <Heading />
      <Product products={products} cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
      <GetStart />
      <Pricing />
      <Footer />



      <ToastContainer />
    </>
  )
}

export default App
