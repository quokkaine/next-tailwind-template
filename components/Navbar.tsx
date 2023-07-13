'use client'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="flex flex-row w-full px-10 m-auto navbar justify-cen p-7">
            <div className="grow">
                <Link
                    className={'absolute left-10 top-10 cursor-pointer'}
                    href={'/'}
                >
                    <Logo />
                </Link>
            </div>
            {/* <div className="absolute flex flex-row gap-2 right-10 top-10">

            </div> */}
        </div>
    )
}

export default Navbar
