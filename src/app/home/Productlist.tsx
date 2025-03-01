"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardImage, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import Product1 from '../../../public/image1.png';

const Productlist = () => {
    const [activeBtn, setActiveBtn] = useState(0)
    const filterbtn = ['All', 'Cardiology', 'Neurology', 'Urology','Ophthalmology','Pediatrics','Orthopedics','Dermatology','Pathology']
  return (
    <section className='m-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-3xl font-semibold'>Top Selling Products</h1>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.</p>
        </div>
        <div className='flex items-center justify-center gap-x-10'>
          {filterbtn.map((btn, index) => (
            <button key={index} className={`  text-black/50 ${activeBtn === index ? 'bg-primary-100 text-white px-5 py-1 rounded-full' : ''}`} onClick={() => setActiveBtn(index)}>{btn}</button>
          ))
          }
        </div>
        <div className='grid grid-cols-4 item justify-center gap-5'>
           {[1,2,3,4,5,6,7,8,9,10].map((item)=>( <Card className='flex flex-col gap-2 w-[15rem] p-2'>
               <div className='flex items-center justify-center relative bg-gray-200 rounded-md'>
                <div className='bg-blue-300 text-white px-2 py-1 rounded-r-md absolute top-2 left-0 text-xs'>10% OFF</div>
                 <CardImage src={Product1.src} alt='product1' width={200} height={200} />
                 </div>
                <CardContent className='flex flex-col  gap-1'>
                   <div className="flex items-center justify-between p-1">
                     <CardTitle className="text-sm font-normal">Oflocin <br/>
                   Eardrops 3%</CardTitle>
                    <div>⭐ 4.5</div>
                    </div>
                    <CardDescription className='text-xs'>1 Bottles</CardDescription>
                    <CardFooter className='flex items-center justify-between gap-2'>
                       <div className="flex flex-col space-y-0">
                        <p className="text-primary-100">100Rs</p>
                        <p className='line-through text-gray-400 font-thin'>100Rs</p>
                        </div>
                        <Button className='bg-primary-100 hover:bg-primary-100/80 text-white rounded-full'>Add to Cart</Button>
                    </CardFooter>
                </CardContent>
            </Card>))}

        </div>
        <div className='flex items-center justify-center'><Button className='bg-transparent hover:bg-transparent text-primary-100 border border-primary-100  rounded-full'>Load More</Button></div>
      </div>
    </section>
  )
}

export default Productlist