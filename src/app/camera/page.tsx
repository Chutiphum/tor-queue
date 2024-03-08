'use client'

import React, { useState, useEffect } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

export default function Camera() {
    const [data, setData] = useState('No result');
    const [showModal, setShowModal] = useState(false);
    const [cameraError, setCameraError] = useState(false);

    useEffect(() => {
        if (data !== 'No result') {
            setShowModal(true);
        }
    }, [data]);

    const handleOpenLink = () => {
        window.open(data);
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCameraError = (error: any) => {
        setCameraError(true);
    };

    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            {showModal && (
                <div className="fixed w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <p className='text-center'>คุณต้องการเปิดลิงค์นี้ใช่หรือไม่ ?</p>
                        <p className="text-center">{data}</p>
                        <div className="flex justify-center mt-4">
                            <button onClick={handleOpenLink} className="btn btn-primary mr-2 btn-sm">Open</button>
                            <button onClick={handleCloseModal} className="btn btn-secondary btn-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className='btn btn-outline btn-sm mb-4'>
                <a href="/">Back</a>
            </div>
            <div className="w-60 bg-neutral-700 drop-shadow-lg rounded-sm">
                <div className='m-2'>
                    <Scanner
                        onResult={(text, result) => { setData(text); console.log(text, result); }}
                        onError={(error) => {console.log(error?.message); handleCameraError(error);}}
                        components={{ audio: true }}
                    />
                </div>
            </div>
            {cameraError && (
                <p className="text-white mt-4 bg-rose-600 p-2 rounded-xl">Please turn on access camera</p>
            )}
            <a href={data} className="text-center mt-4">{data}</a>
        </div>
    )
};