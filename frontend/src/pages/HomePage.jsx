import React from 'react'
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories"
import BestDeals from "../components/Route/BestDeals/BestDeals"
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct"
import Event from "../components/Route/Event/Event"
import Footer from "../components/Layout/Footer"

const HomePage = () => {
  return (
    <div>
        <Header activeHandling={1} />
        <Categories />
        <BestDeals />
        <Event />
        <FeaturedProduct />
        <Footer />
    </div>
  )
}

export default HomePage