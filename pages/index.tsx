import tw from 'twin.macro'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header, Button, Logo } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Netflix</title>
      </Head>
      <Header />
    </>
  )
}

export default Home
