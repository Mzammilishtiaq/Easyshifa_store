"use client"; // ✅ Make this a client component

import { usePathname } from "next/navigation";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ Get the current route
  const isAdminRoute = pathname.startsWith("/admin"); // ✅ Check if it's an admin route

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}