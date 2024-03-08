'use client'

import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
// import { useRouter } from 'next/router'

export default function Camera() {
    const [data, setData] = useState('No result');
    // const router = useRouter()

    // const handleBackClick = () => {
    //     console.log("test");
    //     router.push('/')
    // };

    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            <div className='btn btn-outline btn-sm mb-4'>
                <a href="/">Back</a>
            </div>
            <div className="w-60 bg-neutral-700 drop-shadow-lg rounded-sm">
                <div className='m-2'>
                    <Scanner
                        onResult={(text, result) => { setData(text); console.log(text, result); }}
                        onError={(error) => console.log(error?.message)}

                    />
                </div>
            </div>
            <a href={data} className="text-center mt-4">{data}</a>
        </div>
    )
};