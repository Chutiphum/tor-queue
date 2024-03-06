"use client";

import React from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="bg-white p-5 justify-center items-center shadow-xl">
      <div className="justify-center items-center text-center">
        <div className="font-bold text-3xl">Login</div>
      </div>
      <button onClick={() => signIn("google")} className="bg-white px-2 py-2 mt-5 border w-full rounded-xl flex justify-center items-center text-xl hover:scale-105 duration-300 text-[#002D74]">
        <Image src="/google-logo.png" width={30} height={30} alt="Google Logo" />
        <span className="p-2">Login with Google</span>
      </button>

    </div>
  );
}