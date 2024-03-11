import React, { useEffect, useState } from 'react'
import Main from './_components/main'
import axios from 'axios'
import { getAllUsers } from '@/db/user'

export const dynamic = 'force-dynamic'

export default async function Page() {
    const data = await getAllUsers()

    return (
        <div>
            {/* @ts-ignore */}
            <Main data={data} />
        </div>
    )
}
