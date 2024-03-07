import React from 'react'

export default function Switch({ list, active, setActive }: any) {

    return (
        <div className='mt-2 p-3 bg-[#DDDDDD] w-[300px] rounded-3xl'>
            <div className="flex  ">
                {
                    list.map((item: any, i: number) => (
                        <div onClick={() => setActive(item)} className={`cursor-pointer px-12 ${item === active ? "bg-[#EEA650] rounded-3xl " : ""}`} key={i}>
                            <div className="text-center ">
                                {item}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
