import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '@fontsource/manrope'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
})

const fonts = {
  heading: `Manrope, ${baseTheme.fonts?.heading}`,
  body: `Manrope, ${baseTheme.fonts?.body}`,
}

const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        backgroundColor: '#040c18',
        color: '#fff',
      },
    }),
  },
  fonts,
  breakpoints,
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: 9,
      },
    },
    Button: {},
  },
})

export default theme
