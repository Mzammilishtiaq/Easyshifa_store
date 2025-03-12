"use client"
import React from 'react'
import Images from '../../../public/image1.png';
import Add from '../../../public/add-icon.svg';
import Substract from '../../../public/substract-icon.svg';
import Delete from '../../../public/delete-icon.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { decrement, increment } from "@/redux/feature/counter/counter";
const cartlist = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className='flex flex-col shadow-md rounded-md p-4 w-[30%] space-y-3'>
    <div className='flex flex-col space-y-2'>
        <h1 className='text-xl text-bold'>Yor Cart</h1>
        <h1 className='text-gray-400 text-sm'>Orber No# 12378</h1>
    </div>
    <div className=' flex items-center justify-between space-x-4'>

        <div className='bg-gray-200 p-2 rounded-md'>
            <Image src={Images} alt={''} className='w-20 h-20' />
        </div>
        <div className='flex flex-col space-y-2'>
            <h1>Hitica 60mg Tab (10S)</h1>
            <p>1 Box (10 Tablets)</p>
            <div className='flex items-center space-x-4'>
                <button className='flex items-center justify-center px-2 py-2 rounded-md bg-[#F6F6F6]' onClick={() => dispatch(decrement())} disabled={count===0}>
                    <Image src={Add} alt={''} width={10} height={10} />
                </button>
                <h1 className='text-sm font-semibold'>{count}</h1>
                <button className='flex items-center justify-center px-2 py-3 rounded-md bg-[#F6F6F6]' onClick={() => dispatch(increment())} disabled={count===10}>
                    <Image src={Substract} alt={''} width={10} height={10} />
                </button>
            </div>
        </div>
        <div className='flex flex-col items-end justify-between space-y-10'>
            <h1 className='text-bold text-lg text-primary-100'>105 Rs</h1>
            <button><Image src={Delete} alt={'delete'} /></button>
        </div>
    </div>
</div>
  )
}

export default cartlist