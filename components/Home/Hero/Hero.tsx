import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
  return (
  <div className="w-full pt-[4vh] h-screen bg-[#0f0725] overflow-hidden relative bg-[url('/images/Hero.jpg')] bg-cover bg-center">
          {/* {black overlay} */}
          <div className='absolute inset-0 bg-black opacity-70'>
              {/* {content} */}
              <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
                  <h1 data-aos="fade-left" className='text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium'>
                      The Best Way To
                  </h1>
                  <h1 data-aos="fade-right" data-aos-delay="150" className='text-center font-semibold text-3xl sm:text-5xl text-white mt-4'>
                      Find Your Dream Home
                  </h1>
                  <p data-aos="fade-up" data-aos-delay="350" className="mt-4 text-center text-sm sm:text-base text-gray-200">
                      We’ve more than <span className="text-yellow-400 font-semibold">745,000+</span> apartments, places & plots.
                  </p>
                  <div data-aos="zoom-in" data-aos-delay="450" className='mt-12 w-full'>
                      <SearchBox />
                  </div>

                  
              </div>
          </div>
</div>

  )
}

export default Hero
