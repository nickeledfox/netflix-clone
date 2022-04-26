import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    backgroundColor: '#181818',
    color: '#FFFFFF',
    // overflowX: 'hidden',
    fontFamily: 'Helvetica Neue',
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
