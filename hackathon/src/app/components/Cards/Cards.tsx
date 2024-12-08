import Image from 'next/image'
import React from 'react'
import CardMan from '/public/Images/CardsMan.png'
import CardWomen from '/public/Images/cardwomen.png'
import CardWomen1 from '/public/Images/cardwomen1.png'
import CardKids from '/public/Images/cardskids.png'

const Cards = () => {
  return (
    <div className="bg-white py-10 px-5 pt-24">
      <h2 className="text-center text-xl font-bold mb-2">EDITOR'S PICK</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
     
      <div className="grid grid-cols-4 gap-1 items-start">
  {/* CardMan Image */}
  <div className="col-span-2 row-span-2 flex">
    <Image 
      src={CardMan} 
      alt="man" 
      width={510} 
      height={500} 
      
    />
  </div>

  {/* CardWomen Image */}
  <div className="col-span-1 row-span-2 flex">
    <Image 
      src={CardWomen} 
      alt="women" 
      width={240} 
      height={500} 
      
    />
  </div>

  {/* CardWomen1 Image */}
  <div className="col-span-1 flex">
    <Image 
      src={CardWomen1} 
      alt="women1" 
      width={240} 
      height={242} 
     
    />
  </div>

  {/* CardKids Image */}
  <div className="col-span-1 flex">
    <Image 
      src={CardKids} 
      alt="kids" 
      width={240} 
      height={242} 
     
    />
  </div>
</div>



    </div>
  )
}

export default Cards
