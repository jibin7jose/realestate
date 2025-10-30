import React from 'react'
import Image from 'next/image'
import { BiCalendar } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

type Props = {
  blog: {
    id: number
    date: string
    comment: string
    title: string
    shortDescription: string
    image: string
  }
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="w-full h-[420px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-[200px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
            <BiCalendar className="text-rose-500 text-lg" />
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.comment} Comments</span>
          </div>

          <h3 className="font-bold hover:underline cursor-pointer mb-2 text-lg text-gray-700 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2">
            {blog.shortDescription}
                  </p>
               
              </div>
                 <div className='mt-4 flex items-center space-x-2 hover:text-red-500 cursor-pointer'>
                      <span className='font-bold'>Read More</span>
                      <BsArrowRight/>
                  </div>
      </div>
    </div>
  )
}

export default BlogCard
