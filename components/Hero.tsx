import tw from 'twin.macro'
import { IMAGE_URL } from '../constants/movie'
import { Movie } from '../types/typing'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
import { Heading, Paragraph, FlexWrapper, LDiv } from '../styles'
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

  const BANNER = `${IMAGE_URL}/original${
    movie?.backdrop_path || movie?.poster_path
  }`

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
      <LDiv>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <MovieOverview>{movie?.overview}</MovieOverview>

        <BtnWraper>
          <Button variant={'white'}>
            <i>
              <FaPlay />
            </i>
            Play
          </Button>
          <Button variant={'secondary'}>
            <i>
              <HiInformationCircle />
            </i>
            More Info
          </Button>
        </BtnWraper>
      </LDiv>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex
flex-col
justify-end
pt-72
md:pt-64
lg:pt-[45%]
lg:h-[75vh]
`

const BtnWraper = tw(FlexWrapper)`
space-x-3 py-5 
lg:pt-10 lg:pb-16`

const Banner = tw.div`
absolute z-[-10]
top-0 left-0 
h-[810px] w-screen 
`

const Title = tw(Heading)`pb-1.5 md:pb-2 lg:pb-3`

const MovieOverview = tw(Paragraph)`
text-shadow-md
max-w-xs leading-[1.10rem]
md:max-w-lg md:leading-5
lg:max-w-2xl
`

export default Hero
