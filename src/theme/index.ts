import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import config from './config'
import breakpoints from './breakpoints'
import colors from './colors'
import fonts from './fonts'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import Avatar from './components/Avatar'
import { Heading, CustomHeading } from './components/Heading'
import Text from './components/Text'
import Tooltip from './components/Tooltip'

const theme = extendTheme({
  config,
  breakpoints,
  fonts,
  colors,
  styles: {
    global: () => ({
      body: {
        backgroundColor: 'dark.500',
        color: 'white',
        overflowX: 'hidden',
      },
      ':root .nav-link-active': {
        color: 'white',
      },
    }),
  },
  components: {
    CustomHeading,
    Container,
    Heading,
    Text,
    Button,
    Input,
    Avatar,
    Tooltip,
  },
})

export default theme
