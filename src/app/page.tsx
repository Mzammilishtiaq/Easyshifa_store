"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      router.push('/home');
    };
    verifySession();
  }, [router]);

  return (
   <main className="flex max-h-[100%] overflow-hidden flex-col items-center justify-center gap-0">
    </main>
  );
}
