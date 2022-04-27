import tw from 'twin.macro'

export const FlexWrapper = tw.div`flex items-center`
export const Container = tw.div`container lg:max-w-['1600px']`

export const PageWrapper = tw.div`
relative 
h-screen
bg-gradient-to-b from-[rgba(20, 20, 20, 0)] to-[rgba(20, 20, 20, 1)]
scrollbar-hide
`

export const Main = tw.main`scrollbar-hide pb-52`

export const Section = tw.section`
[> div]:md:space-y-16 
[> div]:lg:space-y-24`

export const LDiv = tw.div`
pl-4 py-4 
lg:pl-12 lg:py-3`

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
