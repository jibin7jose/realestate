'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CityCard from './CityCard'
import { cities } from '@/data/data'

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const CitySlider = () => {
  return (
    <Carousel
      arrows
      autoPlay
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      itemClass="px-2"
    >
      {cities.map((city) => (
        <div key={city.id}>
          <CityCard city={city} />
        </div>
      ))}
    </Carousel>
  )
}

export default CitySlider
