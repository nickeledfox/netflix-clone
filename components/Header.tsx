import tw, { css } from 'twin.macro'

import { FiSearch } from 'react-icons/fi'
import Logo from './Logo'

import Link from 'next/link'
import Image from 'next/image'
import avatar from '../assets/images/Netflix-avatar.png'

import { FlexWrapper } from '../styles'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <FixedHeader css={isScrolled && { background: '#141414' }}>
      <Wrap tw="md:space-x-10">
        <Logo />
        <NavList>
          {/* TODO: map when path and data are available */}
          <NavLink>Home</NavLink>
          <NavLink>TV Shows</NavLink>
          <NavLink>Movies</NavLink>
          <NavLink>New & Popular</NavLink>
          <NavLink>My List</NavLink>
        </NavList>
      </Wrap>
      <Wrap>
        <FiSearch tw="hidden sm:inline text-2xl pb-1" />
        <Link href="/">
          <a>
            <Image
              src={avatar}
              alt="avatar"
              width={33}
              height={30}
              tw="rounded-sm"
            />
          </a>
        </Link>
      </Wrap>
    </FixedHeader>
  )
}

const FixedHeader = tw.header`
flex
justify-between 
fixed 
top-0 
z-40 
w-full 
px-4 py-4 
transition 
lg:px-12 lg:py-3
bg-gradient-to-b from-[rgba(20, 20, 20, 0.5)] to-[rgba(20, 20, 20, 0)] 
`

const Wrap = tw(FlexWrapper)`space-x-4`

const NavList = tw.nav`
hidden 
space-x-4 
md:flex
`

const NavLink = tw.a`
cursor-pointer
text-sm
font-light
transition
text-light
md:hocus:text-white
md:focus:font-normal
md:active:font-normal
`

export default Header
