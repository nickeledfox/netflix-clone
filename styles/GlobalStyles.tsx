import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'
import 'normalize.css'

const hiddenScroll = css`
  html: {
    scrollbarwidth: 'none';
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`

const customStyles = css(hiddenScroll, {
  body: {
    backgroundColor: '#181818',
    color: '#FFFFFF',
    overflowX: 'hidden',
    fontFamily: 'Helvetica Neue',
    scrollBehavior: 'smooth',
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
