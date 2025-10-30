'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { userReviewData } from '@/data/data'
import ReviewsCard from './ReviewsCard' // adjust path

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  bile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const ReviewsSlider = () => {
  return (
    <Carousel
      arrows
      autoPlay
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      
    >
      {userReviewData.map((review) => (
        <div key={review.id}>
          <ReviewsCard review={review} />
        </div>
      ))}
    </Carousel>
  )
}

export default ReviewsSlider
