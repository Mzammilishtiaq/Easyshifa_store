"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Search from '../../../public/search_icon.svg'
import Upload from '../../../public/upload_icon.svg'
import ProductCard from '@/components/Shared/ProductCard/ProductCard'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import Product1 from '../../../public/image1.png';
import { useDispatch } from 'react-redux'
import {addItem} from '@/redux/feature/cartlist/cartist'
const page = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product:any) => {
    console.log('product',product)
        dispatch(addItem(product));
      }
  const category = [
    "Medicines",
    "Beauty & Wellness",
    "Multivitamins",
    "Supplements",
    "Nutrients",
    "Baby & Mother Care",
    "Devices & Injectables",
    "Herbals"
  ]
  const ByMedicalField = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Supplements",
    "Nutrients",
  ]
  return (
    <section className='w-full flex flex-col items-center justify-center px-20 py-10 space-y-5 '>

        <div className='container  flex flex-col  space-y-10 py-10 bg-primary-50 rounded-lg'>
          <div className='flex items-center justify-center flex-col gap-4 w-full'>
            <h1 className='text-[2.5rem] font-semibold text-center '>Explore Medicines</h1>
            <p className='text-center text-black/100'>Easily order your essentials online and let us take care of the rest, <br /> delivering directly to your doorstep.</p>
          </div>
          {/* search bar */}
          <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center py-4 px-2 rounded-full bg-white w-4/12 relative shadow'>
              <input type='text' placeholder='Search the products...' className='w-full max-w-[400px] p-3 outline-none' />
              <div className='-translate-y-1/2 absolute right-2 top-1/2 bg-primary-100 p-3 rounded-full'> <Image src={Search} className='' alt='search' width={30} height={30} /></div>
            </div>
          </div>
        </div>
        <div className='container w-full mx-auto flex items-center justify-between'>
          <h1>1200 + Products</h1>
          <div className='flex items-center space-x-2'>
            <p>Sort By:</p>
            <select className='border px-5 py-2 rounded-lg'>
              <option value={'pkr'}>Pakistan</option>
              <option value={'pkr'}>Pakistan</option>
              <option value={'pkr'}>Pakistan</option>
              <option value={'pkr'}>Pakistan</option>
            </select>
          </div>
        </div>
        <div className='flex  container w-full justify-between mx-auto'>
          <div className='flex flex-col w-96 h-full border rounded space-y-3 p-3 '>
            <h1 className='text-2xl font-semibold'>Filters</h1>
            <h1 className='text-lg font-medium'>Category</h1>
            <div className=''>
              {category.map((item) => <div className='flex items-center space-x-10' key={item}><input type="checkbox"  /><p>{item}</p></div>)}
            </div>
            <h1 className='text-lg font-medium'>By Medical Field</h1>
            <div className=''>
              {ByMedicalField.map((item) => 
              <div className='flex items-center space-x-10' key={item}>
                <input type="checkbox"  />
                <p>{item}</p>
                </div>
              )}
            </div>
          </div>
          <div className='grid grid-cols-3 items-center justify-center gap-10'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
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
            )}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
    </section>
  )
}

export default page