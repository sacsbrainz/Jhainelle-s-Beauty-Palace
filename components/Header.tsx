import React, { useEffect, useState } from 'react'
// import Logo from
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()
  const rendeThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <SunIcon className='h-7 w-7' role='button' onClick={() => setTheme('light')} />
    } else {
      return <MoonIcon className='h-7 w-7' role='button' onClick={() => setTheme('dark')} />
    }
  }
  return (
    <div className='border-b-[0.5px] border-gray-600 p-2 capitalize '>
      <nav className='flex flex-wrap items-center p-1 '>
        <Link href='/'>
          <a className='inline-flex items-center px-4 '>
            <Image
              src='/logo.jpeg'
              alt='logo'
              className='lazyloaded rounded-full '
              data-ll-status='loaded'
              width={40}
              height={40}
            />
            <span className='px-4 font-extrabold uppercase tracking-wide text-white sm:text-sm md:text-lg lg:text-xl'>
            JPalace
            </span>
          </a>
        </Link>
        <button
          className=' ml-auto inline-flex rounded p-3 text-[#e0e0e2] outline-none lg:hidden'
          onClick={handleClick}
        >
          {!active ? (
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-6 w-6 rounded-full transition'
            >
              <path fill='currentColor' d='M0 0h24v24H0z' />
              <path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' />
            </svg>
          )}
        </button>
     
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
          <div className='flex w-full flex-col items-start capitalize md:px-10 lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center'>
            <Link href='/'>
              <a className='w-full items-center justify-center rounded px-3 py-2 text-[#e0e0e2]  lg:inline-flex lg:w-auto   '>
                Home
              </a>
            </Link>
            <Link href='#about'>
              <a className='w-full items-center justify-center rounded px-3 py-2 text-[#e0e0e2]  lg:inline-flex lg:w-auto  '>
                About us
              </a>
            </Link>
            <Link href='#pricelist'>
              <a className='w-full items-center justify-center rounded px-3 py-2 text-[#e0e0e2]  lg:inline-flex lg:w-auto  '>
                Price List
              </a>
            </Link>

            <Link href='#testimonies'>
              <a className='w-full items-center justify-center rounded px-3 py-2 text-[#e0e0e2]  lg:inline-flex lg:w-auto  '>
              Testimonies
              </a>
            </Link>
            <Link href='#services'>
              <a className='w-full items-center justify-center rounded px-3 py-2 text-[#e0e0e2]  lg:inline-flex lg:w-auto '>
                Services
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
