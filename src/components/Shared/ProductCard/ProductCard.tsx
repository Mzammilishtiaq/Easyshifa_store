import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardImage, CardTitle } from '@/components/ui/card'
import React from 'react'

interface Props {
  Discont: string;
  Picture: any;
  Title: string;
  SubTitle: string;
  Rating: string;
  Price: string;
  SubPrice: string;
  handleAddtocard: () => void;
}
const ProductCard = ({ Discont, handleAddtocard, Picture, Price, Rating, SubPrice, SubTitle, Title }: Props) => {
  return (
    <Card className='flex flex-col gap-2 w-[20rem] p-2'>
      <div className='flex items-center justify-center relative bg-gray-200 rounded-md'>
        <div className='bg-blue-300 text-white px-2 py-1 rounded-r-md absolute top-2 left-0 text-xs'>{Discont} OFF</div>
        <CardImage src={Picture.src} alt='product1' width={200} height={200} />
      </div>
      <CardContent className='flex flex-col  gap-1'>
        <div className="flex items-center justify-between p-1">
          <CardTitle className="text-sm font-normal">{Title}</CardTitle>
          <div>⭐ {Rating}</div>
        </div>
        <CardDescription className='text-xs'>{SubTitle}</CardDescription>
        <CardFooter className='flex items-center justify-between gap-2'>
          <div className="flex flex-col space-y-0">
            <p className="text-primary-100">{Price}Rs</p>
            <p className='line-through text-gray-400 font-thin'>{SubPrice}Rs</p>
          </div>
          <Button className='border-2 border-black/30 hover:bg-transparent bg-transparent text-black rounded-full cursor-pointer' onClick={handleAddtocard}>Add to Cart</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default ProductCard