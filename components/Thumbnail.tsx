import tw from 'twin.macro'
import Image from 'next/image'
import { Movie } from '../types/typing'

import { IMAGE_URL } from '../constants/movie'

interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  const BANNER = `${IMAGE_URL}/w500${
    movie?.backdrop_path || movie?.poster_path
  }`

  return (
    <ThumbContainer>
      <Image
        src={BANNER}
        tw="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </ThumbContainer>
  )
}

const ThumbContainer = tw.div`
h-28 md:h-36 lg:h-[155px] 
min-w-[260px] md:min-w-[300px] 
relative 
cursor-pointer 
duration-200 ease-out
md:hover:scale-105
`

export default Thumbnail
