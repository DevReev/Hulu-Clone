import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
BadgeCheckIcon, 
HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon,
CollectionIcon,
 } from '@heroicons/react/outline'

export default function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image src='https://links.papareact.com/ua6'
            className='object-contain'
            height={200}
            width={200}/>
        </header>
    )
}
