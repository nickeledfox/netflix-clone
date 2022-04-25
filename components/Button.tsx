import tw, { styled, css } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'white' | 'border'
}

const Button = styled.button(({ variant }: ButtonProps) => [
  tw`
  flex 
  items-center 
  gap-x-2 
  rounded 
  px-5 py-1.5 
  text-sm font-semibold capitalize
  transition 
  md:py-2.5 md:px-8 md:text-xl 
  whitespace-nowrap border-[1px]
  
  [> i]:(text-2xl md:text-3xl lg:text-3xl) // > Button Icons
  `,

  tw`hocus:(outline-none)`,

  variant === 'primary' && [
    tw`
    bg-netflix-red 
    border-netflix-red 
    hover:bg-[#F40612] active:bg-[#BB0A12]`,
    css`
      box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
      background-image: linear-gradient(to bottom, #e50914, #db0510);
    `,
  ],

  variant === 'secondary' &&
    tw`
    border-transparent 
    bg-[rgba(255, 255, 255, 0.5)] 
    hover:bg-[rgba(255, 255, 255, 0.25)]`,

  variant === 'white' && [
    tw`
    bg-white 
    text-dark 
    border-white 
    hover:bg-[rgba(255, 255, 255, 0.75)]
    hover:border-transparent
    `,
  ],

  variant === 'border' && [
    tw`
    border-[#888]
    bg-transparent  
    hover:bg-[rgba(150,150,150,.3)]
    uppercase
    `,
  ],
])

export default Button
