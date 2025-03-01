'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo full colour.png";
import Cart from "../../../../public/cart.svg";
import Avaitor from "../../../../public/aviator.png";
import Whatsapp from "../../../../public/whatsapp_small_logo.svg";
import { useState } from "react";


const Navbar = () => {
  const [isnavLink, setIsnavLink] = useState('/');
  const navlink = [
    {
      label: "Home",
      href: "/",
      isActive: isnavLink === "/",
    },
    {
      label: "Products",
      href: "/products",
      isActive: isnavLink === "/products",
    },
    {
      label: "Blog",
      href: "/blog",
      isActive: isnavLink === "/blog",
    },
    {
      label: "FAQ's",
      href: "/faq",
      isActive: isnavLink === "/faq",
    },
    {
      label: "Contact",
      href: "/contact",
      isActive: isnavLink === "/contact",
    }
  ]
  return (
    <nav className="w-full flex items-center p-4 bg-primary-50">
     <div className="w-full flex justify-between items-center gap-4">
     <Image src={Logo} alt="logo" width={120} height={120} />
     <div className="flex items-center gap-4">
      {navlink.map((item) => (
        <Link href={item.href} key={item.label}>
          <p className={` text-uppercase font-medium ${item.isActive ? 'text-[#219D86] border-b-2 border-b-[#219D86] font-semibold' : ''}`}> {item.label}</p>
        </Link>
      ))}
     </div>  
     <div className="flex items-center gap-4">
     <button className="bg-gray-50 rounded-full p-2 relative">
      <Image src={Cart} alt="cart" width={35} height={35} /> 
      <div className="bg-red-500 rounded-full w-4 h-4 text-white text-sm font-semibold flex items-center justify-center absolute top-0 right-0 p-3">0</div>
      </button>
     <button className="bg-gray-50 rounded-full p-2"><Image src={Avaitor} alt="cart" width={35} height={35} /></button>
     <button className="bg-gray-50 rounded-full p-2"><Image src={Whatsapp} alt="cart" width={35} height={35} /></button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;