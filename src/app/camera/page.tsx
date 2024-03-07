'use client'

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function Camera() {
    const [data, setData] = useState('No result');
    
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-40 h-40 bg-white drop-shadow-lg rounded-xl">
                <QrReader
                    onResult={(result: any, error: any) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    } }
                    className="p-2"/>
                <div className='text-center'>{data}</div>
            </div>
        </div>
    )
}
