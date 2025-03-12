"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbEllipsis, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Image from 'next/image'
import React from 'react'
import Product from '../../../../public/image1.png'
import Add from '../../../../public/add-icon.svg'
import securePayment from '../../../../public/securepayment.png'
import FastShipping from '../../../../public/fast-shipping.png'
import Substract from '../../../../public/substract-icon.svg'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Description from './description'
import { decrement, increment } from '@/redux/feature/counter/counter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

const productdetail = () => {
    const Dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <section className='mx-48 flex flex-col space-y-5 my-3'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        /
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section className='flex items-start space-x-10 w-full'>
                <div className='flex flex-col items-center justify-center space-y-3'>
                    <div className='px-2 py-2 bg-[#F6F6F6] rounded-b-md'>
                        <Image src={Product} width={385} alt='' />
                    </div>
                    <div className='flex items-center justify-between space-x-2'
                    >{[1, 1, 1, 1].map(() =>
                        <div className='px-3 py-2 bg-[#F6F6F6] rounded-b-md'>
                            <Image src={Product} width={70} alt='' />
                        </div>
                    )}
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-4xl font-semibold text-black'>Hitica 60mg Tab</h1>
                    <p className='text-sm font-normal text-black/30'>Hitica 60mg Tab</p>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <label htmlFor="option-one">Box (1 strip, 20 Tablets)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <label htmlFor="option-two">Box (1 strip, 20 Tablets)</label>
                        </div>
                    </RadioGroup>
                    <div className='flex flex-col space-y-3'>
                        <p>Quantity:</p>
                        <div className='flex items-center space-x-2'>
                            <Button  className={`bg-[#F6F6F6] rounded-md px-3 py-2 hover:bg-transparent`} onClick={() => count > 0 && Dispatch(decrement())} disabled={count === 0}>
                                <Image src={Substract} alt='add' />
                            </Button>
                            <p>{count}</p>
                            <Button className={`bg-[#F6F6F6] rounded-md px-3 py-2 hover:bg-transparent`} onClick={() => Dispatch(increment())} disabled={count===10}>
                                <Image src={Add} alt='substract' />
                            </Button>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Button className='bg-primary-100 rounded-md px-10 py-2 text-sm hover:bg-primary-100 hover:text-white text-white font-medium'> Add to Cart</Button>
                        <Button className='bg-black rounded-md px-10 text-sm py-2 hover:bg-black hover:text-white text-white font-medium'>Buy Now</Button>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <Image src={securePayment} alt='add' />
                        <Image src={FastShipping} alt='add' />
                    </div>
                </div>
            </section>
            {/* <Description/> */}
        </section>
    )
}

export default productdetail