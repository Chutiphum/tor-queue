"use client"
import React, { useEffect, useState } from 'react'
import Main from './_components/main'
import { useSearchParams } from 'next/navigation'
import Second from './_components/second';

export default function Page() {

    const param = useSearchParams();

    const [data, setData] = useState<any>([
        {
            id: 1,
            name: "ร้านอาหารแมว",
            img: "https://media.discordapp.net/attachments/972513786990837770/1214409887254315089/image.png?ex=65f90257&is=65e68d57&hm=d96618f5390b822feaed00a14af177c0f2ab15fdef4d56d319fa12f919e365c5&=&format=webp&quality=lossless&width=320&height=320",
            gender: "ผู้ชาย",
        },
        {
            id: 2,
            name: "ร้านอาหารแมว 2",
            img: "https://media.discordapp.net/attachments/972513786990837770/1214409887254315089/image.png?ex=65f90257&is=65e68d57&hm=d96618f5390b822feaed00a14af177c0f2ab15fdef4d56d319fa12f919e365c5&=&format=webp&quality=lossless&width=320&height=320",
            gender: "ผู้ชาย",
        }
    ])

    const [dataone, setDataone] = useState<any>({})

    return (
        <div>

            {
                param.get("userid") ? (
                    <>
                        <Second dataone={data.find((item: any) => param.get("userid") === item.id.toString())} />
                    </>

                ) : (
                    <>
                        <Main data={data} />
                    </>
                )
            }





        </div>
    )
}
