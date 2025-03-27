'use client'
import React, { useState } from "react";
import {Table} from "@/components/Shared/Table/Table";
import { FaStar, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Pagnestion from "@/components/Shared/Table/pagnestion";

const ProductTable = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleCheckboxChange = (key: string) => {
    setSelectedRows((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  };

  const columns = [
    {
      title: (
        <div className="flex items-center justify-start w-full">
          <input type="checkbox" />
        </div>
      ),
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_: any, record: any) => (
       <div className="flex items-center justify-start w-full ">
         <input
          type="checkbox"
          checked={selectedRows.includes(record.key)}
          onChange={() => handleCheckboxChange(record.key)}
        />
       </div>
      ),
    },
    {
      title: ( <div className='w-full flex items-start justify-start'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{"Product Name & Size"}</span>
    </div>),
      dataIndex: "product",
      key: "product",
      render: (text: string, record: any) => (
        <div className="flex items-start justify-start gap-3">
          <img src={record.image} alt={record.product} className="w-10 h-10" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold">{record.product}</p>
            <p className="text-gray-500 text-sm">Size: {record.size}</p>
          </div>
        </div>
      ),
    },
    {
      title: ( <div className='w-full flex items-start justify-start'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{"Price"}</span>
    </div>),
      dataIndex: "price",
      key: "price",
      render: (price: number) => <div className="w-full flex items-start justify-start"><p>${price.toFixed(2)}</p></div>,
    },
    {
      title: ( <div className='w-full flex items-start justify-start'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{"Stock"}</span>
    </div>),
      dataIndex: "stock",
      key: "stock",
      render: (stock: any) => (
        <div className="flex flex-col items-start justify-start gap-3 w-full">
          <p className="font-bold">{stock.left} Item Left</p>
          <p className="text-gray-500 text-sm">{stock.sold} Sold</p>
        </div>
      ),
    },
    {
      title:  ( <div className='w-full flex items-start justify-start'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{"Category"}</span>
    </div>),
      dataIndex: "category",
      key: "category",
      render: (category: any) => (
        <div className="flex items-start justify-start gap-3 w-full">
          <span className="text-gray-500 text-sm">{category}</span>
        </div>
      ),
    },
    {
      title: ( <div className='w-full flex items-start justify-start'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{"Rating"}</span>
    </div>),
      dataIndex: "rating",
      key: "rating",
      render: (rating: any) => (
        <div className="flex items-start justify-start gap-3 w-full">
          <FaStar className="text-yellow-500" />
          <p>{rating.value}</p>
          <span className="text-gray-500 text-sm">{rating.reviews} Review</span>
        </div>
      ),
    },
    {
      title:( <div className='w-full flex items-start justify-end'>
        <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
    </div>),
      key: "action",
      render: () => (
        <div className="flex w-full items-start justify-end gap-x-3">
          <button className="text-gray-500">
            <FaEye />
          </button>
          <button className="text-orange-500">
            <FaEdit />
          </button>
          <button className="text-red-500">
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Black T-shirt",
      size: "S, M, L, XL",
      price: 80.0,
      stock: { left: 486, sold: 155 },
      category: "Fashion",
      rating: { value: 4.5, reviews: 55 },
      image: "/images/tshirt.png",
    },
    {
      key: "2",
      product: "Olive Green Leather Bag",
      size: "S, M",
      price: 136.0,
      stock: { left: 784, sold: 674 },
      category: "Hand Bag",
      rating: { value: 4.1, reviews: 143 },
      image: "/images/bag.png",
    },
    {
      key: "3",
      product: "Women Golden Dress",
      size: "S, M",
      price: 219.0,
      stock: { left: 769, sold: 180 },
      category: "Fashion",
      rating: { value: 4.4, reviews: 174 },
      image: "/images/dress.png",
    },
    {
      key: "4",
      product: "Gray Cap For Men",
      size: "S, M, L",
      price: 76.0,
      stock: { left: 571, sold: 87 },
      category: "Cap",
      rating: { value: 4.2, reviews: 23 },
      image: "/images/cap.png",
    },
    {
      key: "5",
      product: "Dark Green Cargo Pant",
      size: "S, M, L, XL",
      price: 110.0,
      stock: { left: 241, sold: 342 },
      category: "Fashion",
      rating: { value: 4.4, reviews: 109 },
      image: "/images/pant.png",
    },
  ];

  return (
  <div className="m-5 bg-white  rounded-lg shadow-sm">
    <div className=" flex items-center justify-between px-3 py-5">
      <h1 className="text-xl font-normal">All Product List</h1>
      <Button className="bg-orange-600 hover:bg-orange-600 text-white hover:text-white">Add Product</Button>
    </div>
      <div className="">
      <Table columns={columns} data={data} className="w-[100%] gap-x-4 " />
    </div>
    <div>
      <Pagnestion />
    </div>
  </div>
  );
};

export default ProductTable;
