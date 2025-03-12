import { Section } from 'lucide-react'
import React from 'react';
import Image from 'next/image';
import Upload from "../../../../public/upload_icon.svg";
import Search from "../../../../public/search_icon.svg";
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className='w-full h-screen bg-primary-50'>
      <div className='container mx-auto flex flex-col  space-y-10 pt-28'>
        <div className='flex items-center justify-center flex-col gap-4 w-full'>
          <h1 className='text-[3rem] font-semibold text-center tracking-[0.20rem] '>Fast, Easy, Reliable <br /> <span className='text-primary-100'>Pharmacy</span> Online</h1>
          <p className='text-center text-black/100'>Easily order your essentials online and let us take care of the rest, <br /> delivering directly to your doorstep.</p>
        </div>
        {/* search bar */}
        <div className='flex items-center justify-center space-x-4'>
           <div className='flex items-center py-4 px-2 rounded-lg bg-white w-4/12 relative shadow'>
           <input type='text' placeholder='Search the products...' className='w-full max-w-[400px] p-3 outline-none' />
           <Image src={Search} className='-translate-y-1/2 absolute right-8 top-1/2' alt='search' width={30} height={30} />
           </div>
            <Button className='bg-primary-100 text-white py-10 px-6 rounded-lg shadow'>
                <Image src={Upload} className='' alt='search' width={40} height={40} />
            </Button>
        </div>
        <div className='flex flex-col space-y-3 items-start justify-start ml-[33%]'>
          <h1 className='text-2xl font-semibold text-left'>Most Selling Products:</h1>
          <div className='flex items-center justify-center gap-4'>
            <div className='bg-[#C8E7E11A] text-black/50 text-sm p-3 rounded-full shadow'>
                <p>Risek 20mg Cap</p>
            </div>
            <div className='bg-[#C8E7E11A] text-black/50 text-sm p-3 rounded-full shadow'>
                <p>Panadol 500mg</p>
            </div>
            <div className='bg-[#C8E7E11A] text-black/50 text-sm p-3 rounded-full shadow'>
                <p>Tobradex Eyedrops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
