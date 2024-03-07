"use client";

import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-5 shadow-xl rounded-xl">
        <div className="text-center">
          <div className="font-bold text-3xl">Login</div>
        </div>

        {!session ? (
          <button
            onClick={() => signIn('google')}
            className="bg-white px-2 py-2 mt-5 border w-full rounded flex justify-center items-center text-xl hover:scale-105 duration-300"
          >
            <Image
              src="/google-logo.png"
              width={30}
              height={30}
              alt="Google Logo"
            />
            <span className="p-2">Login with Google</span>
          </button>
        ) : null}

        {session && (
          <div>
            <button
              onClick={() => signOut()}
              className="bg-white px-2 py-2 mt-5 border w-full rounded flex justify-center items-center text-xl hover:scale-105 duration-300"
            >
              Logout
            </button>
            <div className="bg-gray-100 rounded-xl p-4 mt-4">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={session.user?.image || ''} alt="User Avatar" />
                </div>
              </div>
              <p className="text-2xl">{session.user?.name}</p>
              <p className="text-lg">{session.user?.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}