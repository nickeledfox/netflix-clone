import tw from 'twin.macro'

import { FiSearch } from 'react-icons/fi'
import Logo from './Logo'

import Link from 'next/link'
import Image from 'next/image'
import avatar from '../assets/images/Netflix-avatar.png'

import { FlexWrapper } from '../styles'

const Header = () => {
  return (
    <FixedHeader>
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

const Wrap = tw(FlexWrapper)`space-x-4`

const FixedHeader = tw.header`
flex
fixed 
top-0 
z-10 
w-full 
justify-between 
px-4 py-4 
transition 
lg:px-12 lg:py-6`

const NavList = tw.nav`
hidden space-x-4 md:flex `
const NavLink = tw.a`
cursor-pointer
text-sm
font-light
transition
text-[#e5e5e5]
md:hover:text-gray-300`

export default Header
