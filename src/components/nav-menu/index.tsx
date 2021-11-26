import { useRouter } from 'next/router'
import { HStack } from '@chakra-ui/react'
import Link from 'components/link'
import navItems from './nav-data'

const NavMenu = () => {
  const { pathname } = useRouter()

  return (
    <HStack alignItems="center" spacing={{ base: 7, md: 12 }} as="nav">
      {navItems.map(({ title, href }) => {
        return (
          <Link
            key={href}
            href={href}
            color={pathname == href ? 'white' : 'inherit'}
            whiteSpace="nowrap"
          >
            {title}
          </Link>
        )
      })}
    </HStack>
  )
}

export default NavMenu
