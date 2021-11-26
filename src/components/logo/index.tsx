import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'components/link'
import { SITE_NAME } from 'constants/main'

const Logo = () => {
  return (
    <Heading fontSize="2xl">
      <Link
        href="/"
      >
        {SITE_NAME}
      </Link>
    </Heading>
  )
}

export default Logo
