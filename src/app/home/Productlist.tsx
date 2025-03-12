"use client"
import ProductCard from '@/components/Shared/ProductCard/ProductCard'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Product1 from '../../../public/image1.png';
import { useDispatch } from 'react-redux';
import {addItem} from '@/redux/feature/cartlist/cartist'

const Productlist = () => {
  const [activeBtn, setActiveBtn] = useState(0)
  const filterbtn = ['All', 'Cardiology', 'Neurology', 'Urology', 'Ophthalmology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Pathology']
  const dispatch = useDispatch();

  const handleAddToCart = (product:any) => {
console.log('product',product)
    dispatch(addItem(product));
  }

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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <ProductCard
              key={index}
              Discont='10'
              Picture={Product1}
              Title='medicenc'
              Rating='4.5'
              SubTitle='bottle 1001'
              Price='100'
              SubPrice='200'
              handleAddtocard={() => handleAddToCart({ id: index, title: 'medicenc', price: 100, image:Product1 })} />
          ))}

        </div>
        <div className='flex items-center justify-center'><Button className='bg-transparent hover:bg-transparent text-primary-100 border border-primary-100  rounded-full'>Load More</Button></div>
      </div>
    </section>
  )
}

export default Productlist