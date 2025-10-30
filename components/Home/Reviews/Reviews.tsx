import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 px-4 md:px-0 bg-[#fef7f6] overflow-hidden'>
      <div className='w-[80%] mx-auto'>
        <SectionHeading heading='Our Clients Reviews' />
        <div className='mt-14'>
          <ReviewsSlider />
        </div>
      </div>
    </div>
  )
}

export default Reviews
