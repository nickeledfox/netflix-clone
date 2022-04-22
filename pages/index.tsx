import tw from 'twin.macro'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Button, Logo } from '../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home | Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex w-full flex-1 flex-col items-center text-red-400">
        Hello World
      </main>
    </div>
  )
}

export default Home
