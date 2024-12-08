import React from 'react'
import GraphicDesign from '/public/Images/Graphicdesign.png'
import GraphicDesign1 from '/public/Images/Graphicdesign1.png'
import GraphicDesign2 from '/public/Images/Graphicdesign2.png'
import GraphicDesign3 from '/public/Images/Graphicdesign3.png'
import GraphicDesign4 from '/public/Images/Graphicdesign4.png'
import GraphicDesign5 from '/public/Images/Graphicdesign5.png'
import GraphicDesign6 from '/public/Images/Graphicdesign6.png'
import GraphicDesign7 from '/public/Images/Graphicdesign7.png'
import Image from 'next/image'




const Products = () => {
  return (
     <div> 
     
    <div className="flex flex-col items-center justify-center pt-28">
  <div className="text-center space-y-2">
    <p className="w-auto h-auto text-[20px] font-normal text-[#737373]">
      Featured Products
    </p>
    <h1 className="w-auto text-[24px] font-bold">
      BESTSELLER PRODUCTS
    </h1>
    <p className="w-auto h-auto text-[14px] font-normal text-[#737373]">
      Problems trying to resolve the conflict between
    </p>
  </div>


  <div className='flex justify-center items-center gap-[30px] '>
      <Image src={GraphicDesign} alt='graphicdesigner' width={238} height={615}/> 
      <Image src={GraphicDesign1} alt='graphicdesigner' width={241} height={615}/> 
      <Image src={GraphicDesign2} alt='graphicdesigner' width={240} height={615}/> 
      <Image src={GraphicDesign3} alt='graphicdesigner' width={240} height={615}/> 
      </div>


      <div className='flex justify-center items-center gap-[30px] pt-[30px]'>
      <Image src={GraphicDesign4} alt='graphicdesigner' width={238} height={615}/> 
      <Image src={GraphicDesign5} alt='graphicdesigner' width={241} height={615}/> 
      <Image src={GraphicDesign6} alt='graphicdesigner' width={240} height={615}/> 
      <Image src={GraphicDesign7} alt='graphicdesigner' width={240} height={615}/> 
      </div>
</div>






</div>
  
  )
}

export default Products
