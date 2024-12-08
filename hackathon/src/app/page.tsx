import React from 'react'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Products from './components/Products/Products'
import ProductBanner from './components/ProductBanner/ProductBanner'
import Banner from './components/Banner2/Banner'
import Featured from './components/Featured/Featured'

const page = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Products />
      <ProductBanner />
      <Banner />
      <Featured />
    </div>
  )
}

export default page
