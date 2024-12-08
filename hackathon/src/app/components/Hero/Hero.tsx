import Image from 'next/image'
import React from 'react'
import HeroImg from '/public/Images/HeroImg.jpg'

const Hero = () => {
  return (
    <div className='relative'>
  <Image src={HeroImg} alt='Heroimage' width={1440} height={716} />
  
  <div className='absolute top-[260px] left-[140px] w-[599px] h-[331px] gap-4'>
    <p className='w-[122px] h-[24px] font-bold text-[16px] text-white'>SUMMER 2020</p>
    <h1 className='w-[548px] h-[80px] font-bold text-[58px] text-white'>NEW COLLECTION</h1>
    <p className='w-[376px] h-[60px] font-normal text-[20px] text-white'>
      We know how large objects will act, but things on a small scale.
    </p>
    <button className='bg-[#2DC071] w-[221px] h-[62px] text-white rounded-[5px]'>Shop Now</button>
  </div>
</div>

  )
}

export default Hero
