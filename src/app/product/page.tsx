import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const page = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/home')
    }, [])
    return (
        <div>Loading...</div>
    )
}

export default page