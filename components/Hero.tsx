import tw from 'twin.macro'
import { IMAGE_URL } from '../constants/movie'
import { Movie } from '../types/typing'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
import { Heading, Paragraph, Container, FlexWrapper } from '../styles'
import Button from './Button'

import { useEffect, useState } from 'react'

interface HeroProps {
  netflixOriginals: Movie[]
}

const Hero = ({ netflixOriginals }: HeroProps) => {
  const [movie, setBanner] = useState<Movie | null>(null)

  useEffect(() => {
    setBanner(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    )
  }, [netflixOriginals])

  const BANNER = `${IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`

  return (
    <Wrapper>
      <Banner>
        <Image
          placeholder="blur"
          blurDataURL={BANNER}
          src={BANNER}
          alt="movie banner"
          layout="fill"
          objectFit="cover"
        />
      </Banner>
      <Container>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <MovieOverview>{movie?.overview}</MovieOverview>

        <BtnWraper>
          <Button variant={'white'}>
            <FaPlay tw="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
          </Button>
          <Button variant={'secondary'}>
            More Info <HiInformationCircle tw="h-5 w-5 md:h-8 md:w-8" />
          </Button>
          <Button variant={'border'}>Test</Button>
        </BtnWraper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex
flex-col
justify-end
pt-72
md:pt-64
lg:pt-96
lg:h-[65vh]
`
const BtnWraper = tw(FlexWrapper)`space-x-3 py-5`

const Banner = tw.div`
absolute z-[-10]
top-0 left-0 
h-[95vh] w-screen 
`

const Title = tw(Heading)`pb-6`

const MovieOverview = tw(Paragraph)`
max-w-xs md:max-w-lg lg:max-w-2xl 
`

export default Hero
