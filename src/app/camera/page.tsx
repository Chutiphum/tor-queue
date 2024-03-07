'use client'

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function Camera() {
    const [data, setData] = useState('No result');

    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            <div className="w-60 bg-white drop-shadow-lg rounded-xl">
                <QrReader
                    onResult={(result: { text: React.SetStateAction<string>; }, error: any) => {
                        if (result) {
                            setData(result.text);
                        }
                        if (error) {
                            console.error(error);
                        }
                    }}
                    className="w-full h-full"
                />
            </div>
            <a href={data} className="text-center m-4">{data}</a>
        </div>
    )
};