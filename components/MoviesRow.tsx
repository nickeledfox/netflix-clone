import tw from 'twin.macro'
import { FlexWrapper, Heading2 } from '../styles'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { Movie } from '../types/typing'
import Thumbnail from './Thumbnail'
import { useRef, useState } from 'react'

interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <RowWrapper>
      <Title>{title}</Title>
      <div tw="relative" className="group">
        <Arrow
          tw="left-0 lg:left-[-60px]"
          {...`${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        >
          <FiChevronLeft />
        </Arrow>
        <ThumbWrapper ref={rowRef}>
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </ThumbWrapper>
        <Arrow tw="right-3.5">
          <FiChevronRight onClick={() => handleClick('right')} />
        </Arrow>
      </div>
    </RowWrapper>
  )
}

const RowWrapper = tw.div`
w-full h-56
my-2
space-y-0.5 md:space-y-2
`
const ThumbWrapper = tw(FlexWrapper)`
space-x-0.5
md:space-x-2.5 
overflow-x-scroll
overflow-y-hidden

`
const Arrow = tw.span`
absolute top-0 bottom-0 z-10 
m-auto 
h-9 w-9 
cursor-pointer 
transition 
text-6xl
text-shadow-md
hover:scale-125
hover:text-netflix-red
opacity-0
group-hover:opacity-100
`
const Title = tw(Heading2)`
font-semibold
text-light
py-3
hover:text-white
cursor-pointer
transition duration-200
`

export default Row
