import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

function AddProduct() {
  return (
    <div className="m-5 flex flex-col space-y-5">
      {/* Add Product Photo Section */}
      <div className="flex flex-col items-start justify-between px-3 py-5 bg-white rounded-lg shadow-sm space-y-5">
        <h1 className="text-xl text-left font-normal">Add Product Photo</h1>
        <div className="flex flex-col items-center justify-center space-y-5 w-full border-4 border-dashed border-gray-300 p-5 rounded-lg">
          <AiOutlineCloudUpload className="text-4xl text-orange-500" />
          <p className="text-gray-500 text-center">
            Drop your images here, or{' '}
            <span className="text-orange-500 font-medium cursor-pointer">
              click to browse
            </span>
          </p>
          <p className="text-sm text-gray-400">
            1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
          </p>
          <input type="file" className="hidden" />
        </div>
      </div>

      {/* Product Information Section */}
      <div className="p-5 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Product Information</h2>
        <div className="grid gap-4">
  {/* First Row: 2 Columns */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Product Name"
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
    <select className="border border-gray-300 rounded-lg p-2 w-full">
      <option>Choose a category</option>
      <option>Category 1</option>
      <option>Category 2</option>
    </select>
  </div>

  {/* Second Row: 3 Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input
      type="text"
      placeholder="Brand"
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
    <input
      type="text"
      placeholder="Weight (in gm or kg)"
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
    <select className="border border-gray-300 rounded-lg p-2 w-full">
      <option>Select Gender</option>
      <option>Men</option>
      <option>Women</option>
      <option>Other</option>
    </select>
  </div>
</div>

        {/* Size and Colors */}
        <div className="mt-4 flex items-center">
          <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-medium mb-2">Size:</h3>
            <div className='flex items-center space-x-3'>{['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
              <button
                key={size}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
              >
                {size}
              </button>
            ))}</div>
          </div>
          <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-medium mt-4 mb-2">Colors:</h3>
           <div className='flex item-center space-x-3'>
           {['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map(
              (color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              )
            )}
           </div>
          </div>
        </div>

        {/* Description */}
        <textarea
          placeholder="Short description about the product"
          className="border border-gray-300 rounded-lg p-2 w-full mt-4"
          rows={3}
        ></textarea>

        {/* Tag and Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Tag Number"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
      </div>

      {/* Pricing Details Section */}
      <div className="p-5 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Pricing Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Price ($)"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Discount (%)"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Tax (%)"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 p-5 bg-white rounded-lg shadow-sm">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Create Product
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AddProduct