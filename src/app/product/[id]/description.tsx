import React, { useState } from 'react'

// const Reviews = () => {
//   return (
//     <div>
//       <h1>5 Star</h1>
//       <div className='bg-amber-200 py-2 h-[3vh]'>
//         <div className='bg-primary-100 py-2 h-[3vh]'></div>
//       </div>
//     </div>
//   )
// }


const description = () => {
  const [isactive, setIsActive] = useState()

  return (
    <section className=''>
      <div className='flex items-center space-x-5'>
        <h1 className="text-2xl font-semibold">Description</h1>
        <h1 className="text-2xl font-semibold">Reviews</h1>
      </div>
      <div className="bg-[#FBFDFD] p-3 w-full">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <h1>When to Use?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h1>Diagnosis</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className='bg-[#FBFDFD] p-3 w-full'>
        {/* <Reviews /> */}
      </div>
    </section>
  )
}

export default description