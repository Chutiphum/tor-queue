import React, { useEffect, useState } from 'react'
import Main from './_components/main'
import { useSearchParams } from 'next/navigation'
import Second from './_components/second';
import { getAllUsers } from '@/db/user';

export default async function Page() {

    const data = await getAllUsers()

    return (
        <div>
            {
                <Main data={data} />
            }
        </div>
    )
}
