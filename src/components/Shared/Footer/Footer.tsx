import { Button } from '@/components/ui/button';
import React from 'react'
import Image from 'next/image';
import Fire from '../../../../public/fire.png';
import Apple from '../../../../public/apple-mobile-app.png';
import Android from '../../../../public/android-mobile-app.png';
import Play from '../../../../public/play.svg';
import Arrow from '../../../../public/arrow.svg'
import Mobile from '../../../../public/footer_mobile.png'
import Line from '../../../../public/footer-line.png'
import Whatsapp from '../../../../public/whatsapp.svg'
import Facebook from '../../../../public/facebook.svg'
import Instragram from '../../../../public/instgrame.svg'
import Email from '../../../../public/email.svg'
import Logo from '../../../../public/logo full colour.png'

const Footer = () => {
  return (
    <section className="relative m-10">
  <div className="flex justify-center items-center my-10">
        {/* <Image src={Line} alt={''}  className=" absolute top-0 z-5 w-full " /> */}
        <div className="bg-[#101011] w-9/12 rounded-lg relative h-96 px-10 py-10">
      <Image src={Mobile} alt={''} width={350} height={350}  className=" absolute  right-0 z-5 bottom-0  " />
           <div className="flex flex-col w-5/12 gap-4">
      <Button  className="bg-[#393939] text-[#FFAD4D] border-none w-5/12 rounded-full px-3 py-2 hover:bg-[#393939]/80">
           <Image src={Fire} alt="logo" width={15} height={15} />
           <span>Download on App</span>
       </Button>
       <h1 className='text-white text-2xl font-semibold'>
       Get Our App: Your <br/> Health, Just a Tap Away!
       </h1>
       <p className='text-white text-sm font-normal'>
       Download now to explore medicines, upload <br/> prescriptions, and enjoy seamless doorstep delivery <br /> anytime, anywhere.
       </p>
       <div className="flex items-center gap-4">
        <Image src={Android} alt="logo" width={120} height={120} />
        <Image src={Apple} alt="logo" width={120} height={120} />
       <div className="relative flex space-x-2 ">
          <Image src={Arrow} width={50} height={50} alt={'play'} className="absolute left-[30%] -top-[40%]" />
        <button className='bg-primary-100 text-black rounded-full p-3 hover:bg-white/80'>
          <Image src={Play} width={20} height={20} alt={'play'} />
        </button>
        <p className="text-white mt-3 ">Watch Video</p>
       </div>
       </div>
           </div>
        
      </div>
  </div>
<div className='flex flex-col gap-y-4'>
<div className='flex items-center justify-between gap-4 border-b-2 border-gray-300 pb-4'>
    <Image src={Logo} alt={''} width={100} height={100} />
    <div className='flex items-center gap-4'>
      <button type='button' className='bg-gray-100 rounded-full p-2'>
      <Image src={Whatsapp} alt={''} width={20} height={20} />
      </button>
      <button type='button' className='bg-gray-100 rounded-full p-2'>
      <Image src={Facebook} alt={''} width={20} height={20} />
      </button>
      <button type='button' className='bg-gray-100 rounded-full p-2'>
      <Image src={Instragram} alt={''} width={20} height={20} />
      </button>
     <button type='button' className='bg-gray-100 rounded-full p-2'><Image src={Email} alt={''} width={20} height={20} /></button> 
    </div>
  </div>
  <div className='flex items-center justify-between gap-4'>
    <p className='text-black text-sm font-normal'>
    Copyright © 2025 All Rights Reserved by <span className='text-primary-100'>MediCare</span>
    </p>
    <div className='flex items-center gap-4'>
      <p className='text-black text-sm font-normal'>
         About Us
      </p>
      <p className='text-black text-sm font-normal'>
      Medicine
      </p>
      <p className='text-black text-sm font-normal'>
      Health Tips
      </p>
      <p className='text-black text-sm font-normal'>
      FAQ’s
      </p>
      <p className='text-black text-sm font-normal'>
      Contact Us
      </p>
    </div>
  </div>
</div>
    </section>
  )
}

export default Footer;