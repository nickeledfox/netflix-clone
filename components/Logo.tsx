import Link from 'next/link'
import 'twin.macro'

const Logo = () => (
  <Link href="/">
    <a tw="w-28 block hover:opacity-90 cursor-pointer">
      <LogoImage />
    </a>
  </Link>
)

const LogoImage = () => <img src="https://rb.gy/ulxxee" alt="netflix logo" />

export default Logo
