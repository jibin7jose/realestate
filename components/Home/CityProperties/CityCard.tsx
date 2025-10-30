import React from 'react'
import Image from 'next/image'

type Props = {
    city: {
        id: number;
        image: string;
        cityName: string;
        numberOfProperties: number;
    }
}

const CityCard = ({ city }: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden m-2 group cursor-pointer">
      {/* City Image */}
      <Image
        src={city.image}
        alt={city.cityName}
        width={700}
        height={700}
        className="rounded-lg w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-110"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60">
        <div className="absolute top-4 left-4">
          <h1 className="text-2xl font-semibold text-white">{city.cityName}</h1>
          <p className="text-gray-200 text-sm">{city.numberOfProperties} Properties</p>
        </div>
      </div>
    </div>
  )
}


export default CityCard
