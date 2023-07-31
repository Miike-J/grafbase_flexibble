import { NavLinks } from '@/constants/index';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import React from 'react'
import AuthoProviders from './AuthoProviders';

const Navbar = () => {
    const session = {};
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStatr gap-10'>
            <Link href='/'>
                <Image 
                    src="logo.svg"
                    width={115}
                    height={43}
                    alt="Flexibble"
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {session ? (
                <>
                    UserPhoto

                    <Link href="/create-project">
                        Share Work
                    </Link>
                </>
            ) : (
                <AuthoProviders />
            )
            }
        </div>
    </nav>
  )
}

export default Navbar