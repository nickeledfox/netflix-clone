import tw from 'twin.macro'
import { FlexWrapper, Container, Heading2 } from '../styles'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { Movie } from '../types/typing'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return (
    <RowWrapper>
      <Title>{title}</Title>
      <div tw="relative" className="group">
        <Arrow tw="left-0">
          <FiChevronLeft />
        </Arrow>
        <ThumbWrapper>
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </ThumbWrapper>
        <Arrow tw="right-2.5">
          <FiChevronRight />
        </Arrow>
      </div>
    </RowWrapper>
  )
}

const RowWrapper = tw.div`
w-full h-52
my-2
space-y-0.5 md:space-y-2
pl-3
scrollbar-hide
`
const ThumbWrapper = tw(FlexWrapper)`
space-x-0.5
md:space-x-2.5 
overflow-x-scroll
scrollbar-hide
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
