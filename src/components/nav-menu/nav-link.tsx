//@ts-ignore
import { Link } from 'react-scroll'
import { chakra } from '@chakra-ui/react'

const MagicLink = chakra(Link)

const ScrollLink = (props: any) => <MagicLink {...props} />

export default ScrollLink
