import React from 'react'

export default function Switch({ list, active, setActive }: any) {

    return (
        <div className='mt-2 p-3 bg-[#DDDDDD] w-[300px] rounded-md'>
            <div className="flex justify-center ">
                {
                    list.map((item: any, i: number) => (
                        <div onClick={() => setActive(item)} className={`cursor-pointer px-12 mr-2 ${item === active ? "bg-[#EEA650] rounded-md " : ""}`} key={i}>
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
