import React from 'react'
import Image from 'next/image'
import testmonial from '../../../../public/fire.png'
import Oval1 from '../../../../public/Oval-1.png'
import Oval2 from '../../../../public/Oval-2.png'
import Oval3 from '../../../../public/Oval.png'
import { Carousel ,CarouselItem,CarouselNext,CarouselPrevious,CarouselContent} from '@/components/ui/carousel'

const Testmonial = () => {
  const testmonialData = [
    {
      id: 1,
      name: 'John Doe',
      image: Oval1,
      rating: 5,
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: Oval2,
      rating: 4,
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      image: Oval3,
      rating: 3,
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.'
    }
  ]
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col  items-center justify-center gap-2'>
      <div className='flex gap-2'> <Image src={testmonial} alt={''} width={20} height={20} /> <h1 className='text-2xl font-semibold'>Testimonials</h1></div>
      <p className='text-3xl font-semibold'>What Our <span className='text-primary-100'>Customers</span> Say</p>
      <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.</p>
    </div>
    <Carousel
      opts={{
        align: "center",
        slidesToScroll: 1,
        startIndex: 0,
        dragFree: false,
        watchSlides: true,
        containScroll: "trimSnaps",

       }}
      className="w-full"
    >
      <CarouselContent>
        {testmonialData?.map((value) => <CarouselItem key={value.id}>
          <div className='flex flex-col items-start gap-2 bg-primary-50 p-4 rounded-lg shadow-lg'>
            <div className='flex gap-2'>
              {Array.from({ length: value.rating }).map((_, index) => (
               <p>⭐</p>
              ))}
            </div>
            <p>{value.comment}</p>
            <div className='flex gap-2'>
              <Image src={value.image} alt={''} width={50} height={20} />
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-primary-100 font-semibold'>{value.name}</p>
                <p className='text-sm text-black-50'>John Doe</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)
}

export default Testmonial
