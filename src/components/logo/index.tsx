import { Icon } from '@chakra-ui/react'
import Link from 'components/link'
import LogoIcon from 'components/icons/logo'

const Logo = () => {
  return (
    <Link href="/">
      <Icon as={LogoIcon} width="64px" height="17px" />
    </Link>
  )
}

export default Logo
