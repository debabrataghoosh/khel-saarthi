"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/welcome");
    }, 3000); // 3 seconds splash for better UX
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="text-5xl font-bold text-white mb-6 tracking-wide">KHEL SAARTHI</div>
          <div className="text-xl text-blue-100 tracking-[0.2em] font-medium">• SAI •</div>
        </div>
        <div className="mt-12">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
