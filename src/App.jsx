import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Home/Hero.jsx';
import Shop from './components/Home/Shop.jsx';
import Review from './components/Home/Review.jsx';
import Gallery from './components/Home/Gallery.jsx';
import Foot from './components/Foot.jsx'

import Bodyabout from './components/About/Bodyabout.jsx';
import Heroabout from './components/About/Heroabout.jsx';
import Valueabout from './components/About/Valueabout.jsx';
import Teamabout from './components/About/Teamabout.jsx';

import Herocollection from './components/Collections/Herocollection.jsx';
import ProductFilters from './components/Collections/ProductFilters.jsx';

import HeroOrder from './components/PlaceOrder/HeroOrder.jsx';
import PlaceOrderBody from './components/PlaceOrder/PlaceOrderBody.jsx';
import TrackHero from './components/TrackOrder/TrackHero.jsx';
import TrackOrderBody from './components/TrackOrder/TrackOrderBody.jsx';

function App() {
  return (
    <Router>

      <div>

        <Navbar />

        <Routes>

          <Route path="/" element={
            <>
              <Hero />
              <Shop />
              <Review />
              <Gallery />
            </>
          } />

          <Route path="/About" element={
            <>
              <Heroabout />
              <Bodyabout />
              <Valueabout />
              <Teamabout />
            </>

          } />

          <Route path="/Collections" element={
            <>
              <Herocollection />
              <ProductFilters />
            </>

          } />

          <Route path="/PlaceOrder" element={
            <>
              <HeroOrder />
              <PlaceOrderBody />
            </>

          } />

          <Route path="/trackOrder" element={
            <>
              <TrackHero />
              <TrackOrderBody />
            </>
          } />



        </Routes>

        <Foot />

      </div>

    </Router>
  )
}

export default App