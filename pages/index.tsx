import tw from 'twin.macro'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header, Button } from '../components'
import { PageWrapper, Container } from '../styles'

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Home | Netflix</title>
      </Head>
      <Header />
    </PageWrapper>
  )
}

export default Home
