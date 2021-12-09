import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import config from './config'
import colors from './colors'
import fonts from './fonts'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import Avatar from './components/Avatar'
import { Heading, CustomHeading } from './components/Heading'
import Text from './components/Text'
import Card from './components/Card'

const theme = extendTheme({
  config,
  fonts,
  colors,
  styles: {
    global: () => ({
      body: {
        backgroundColor: 'dark.500',
        color: 'white',
        overflowX: 'hidden',
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
    Card,
  },
})

export default theme
