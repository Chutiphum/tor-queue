'use client'

import React, { useEffect, useState } from 'react'
import Main from './_components/main'
import axios from 'axios'

export default function Page() {
    const [data, setData] = useState([])

    axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/api/users').then(res => {
        setData(res.data)
    })

    if (!data) {
        return <p>loading...</p>
    }

    return (
        <div>
            {/* @ts-ignore */}
            <Main data={data} />
        </div>
    )
}
