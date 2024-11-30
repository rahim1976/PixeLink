'use client'
// import React, { useState } from "react";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Import } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { ModeToggle } from './theme-btn'
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(30)

    setTimeout(() => {
      setProgress(70)
    }, 100)

    setTimeout(() => {
      setProgress(100)
    }, 400)
  }, [pathname])

  useEffect(() => {
    setProgress(0)
  }, [500])

  return (
    <nav className='p-4 bg-background/50 sticky top-0  backdrop-blur border-b z-10'>
      <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <div className='text-3xl font-bold neon-text'>PixeLink</div>
        </Link>

        <div className='hidden md:flex space-x-4 items-center font-bold'>
          <Link href='/' className='neon-link transition duration-300'>
            HOME
          </Link>

          <Link href='/about' className='neon-link transition duration-300'>
            ABOUT
          </Link>

          <Link href='/blog' className='neon-link transition duration-300'>
            BLOG
          </Link>

          <Link href='/contact' className='neon-link transition duration-300'>
            CONTACT
          </Link>

          <div className='flex items-center'>
            <Button className='mx-1' variant='outline'>
              LOGIN
            </Button>

            <Button className='mx-1' variant='outline'>
              SIGNUP
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className='md:hidden'>
          <Sheet>
            <span className='mx-2'>
              <ModeToggle />
            </span>
            <SheetTrigger>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className='font-bold my-4 neon-text'>PixeLink</SheetTitle>
                <SheetDescription>
                  <div className='flex flex-col gap-6'>
                    <Link href='/' className='neon-link transition duration-300'>Home</Link>

                    <Link href='/about' className='neon-link transition duration-300'>About</Link>

                    <Link href='/blog' className='neon-link transition duration-300'>Blogs</Link>

                    <Link href='/contact' className='neon-link transition duration-300'>Contact</Link>

                    <div>
                      <Button className='mx-1 text-xs' variant='outline'>
                        Login
                      </Button>

                      <Button className='mx-1 text-xs' variant='outline'>
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
