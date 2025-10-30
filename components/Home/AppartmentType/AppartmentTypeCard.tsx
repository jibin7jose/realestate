import React from 'react'
import Image from 'next/image'

type Props = {
    type: {
        id: number;
        icon: string;
        type: string;
        number: number;
    }
}

const ApartmentTypeCard = ({ type }: Props) => {
  return (
    <div className='rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300 flex flex-col items-center'>
      <Image src={type.icon} alt={type.type} width={50} height={50} />
      <h3 className='mt-4 text-lg font-semibold'>{type.type}</h3>
      <p className='text-gray-500'>{type.number} units</p>
    </div>
  )
}

export default ApartmentTypeCard
