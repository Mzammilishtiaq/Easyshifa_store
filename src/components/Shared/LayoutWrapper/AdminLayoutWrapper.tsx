"use client"; // ✅ Make this a client component

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from 'next/image';
import Logo from '../../../../public/logo full colour.png'
import { MdDashboard } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { MdInventory2 } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";
import { PiCreditCardFill } from "react-icons/pi";
import { MdEditAttributes } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { SiImessage } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Search } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
    const GeneralList = [{ name: 'Dashboard',link:'/admin/dashboard', icon: MdDashboard },
    { name: 'Products', link:'/admin/products',icon: GiClothes },
    { name: 'Category', link:'',icon: BiSolidCategory },
    { name: 'Order', link:'',icon: FaFirstOrder },
    { name: 'Purchases', link:'',icon: PiCreditCardFill },
    { name: 'Attributes', link:'',icon: MdEditAttributes },
    { name: 'invoices', link:'',icon: LiaFileInvoiceSolid },
    { name: 'Setting', link:'',icon: IoSettingsSharp }
    ]
    const UsersList = [
        { name: 'Profile', icon: SiImessage },
        { name: 'Roles', icon: MdPeopleAlt },
        { name: 'Permission', icon: IoNewspaper },
        { name: 'Customers', icon: FaUserCog },
        { name: 'Sellers', icon: AiOutlineShop },
    ]
    return (
        <aside className="bg-[#262D34] h-[100vh]  w-72 px-3 py-2">
            <div className="space-y-3 flex flex-col">
                <Image src={Logo} width={170} alt={""} />
                <div className="space-y-3 flex flex-col">
                    <h1 className="text-xs text-[#93969A] font-medium mb-2 w-full uppercase">General</h1>
                    <div className="flex flex-col space-y-2">
                        {GeneralList.map((item, index) => (
                            <Link href={item.link ? item.link : ''} key={index} className="flex items-center justify-start space-x-5 hover:text-white" >
                                <item.icon className={`text-[#93969A] text-[25px]  hover:text-white `} />
                                <span className="text-[21px] font-normal text-[#93969A]  hover:text-white">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-3 flex flex-col">
                    <h1 className="text-xs font-medium mb-2 w-full text-[#93969A] uppercase">Users</h1>
                    <div className="flex flex-col space-y-2">
                        {UsersList.map((item, index) => (
                            <div key={index} className="flex items-center justify-start space-x-5">
                                <item.icon className="text-[#93969A] text-[25px]" />
                                <span className="text-[21px] font-normal text-[#93969A]">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export const Topheader = () => {
    return (
        <div className=" flex items-center justify-between">
            <h1>Welcome</h1>
            <div className="flex items-center space-x-5">
               <div className="relative">
                <div className="text-white bg-red-500 rounded-full p-1 w-4 h-4 flex items-center justify-center font-semibold absolute left-2 -top-1 text-sm">0</div>
               <IoNotifications className="text-2xl"/>
               </div>
                <FaRegUserCircle className="text-2xl"/>
                <div className="flex items-center border rounded px-2 py-3 bg-gray-200 gap-x-2 ">
                   <Search className="text-sm text-black"/>
                    <input placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // ✅ Get the current route
    const isAdminRoute = pathname.startsWith("/admin"); // ✅ Check if it's an admin route

    return (
        <section className="bg-[#F9F7F7] flex items-start gap-x-10">
            <div>
                <Sidebar />
            </div>

            <div className=" w-full px-10 py-5 space-y-3">
                <div><Topheader /></div>
                {children}
            </div>
        </section>
    );
}