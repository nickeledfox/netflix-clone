import tw from 'twin.macro'

export const FlexWrapper = tw.div`flex items-center`
export const Container = tw.div`container lg:max-w-['1600px']`

export const PageWrapper = tw.div`
relative 
h-screen
// bg-gradient-to-b from-gray-900/10 to-[#010511] 
bg-gradient-to-b from-[rgba(20, 20, 20, 0)] to-[rgba(20, 20, 20, 1)]
`
export const Heading = tw.h1`
text-4xl
font-sans
font-semibold
md:text-5xl md:font-black
lg:text-6xl
`
export const Heading2 = tw.h2`
text-sm md:text-2xl
`

export const Paragraph = tw.p`
text-sm md:text-lg
`
