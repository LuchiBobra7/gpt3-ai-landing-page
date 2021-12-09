import { HStack } from '@chakra-ui/react'
import ScrollLink from './nav-link'
import navItems from './nav-data'

const NavMenu = () => {
  return (
    <HStack alignItems="center" spacing={{ base: 7, md: 12 }} as="nav">
      {navItems.map(({ title, href }) => {
        return (
          <ScrollLink
            key={href}
            to={href}
            fontSize="lg"
            fontWeight={500}
            color="whiteAlpha.800"
            activeClass="nav-link-active"
            whiteSpace="nowrap"
            spy
            smooth
            offset={-64}
            cursor="pointer"
            _hover={{ color: 'white' }}
          >
            {title}
          </ScrollLink>
        )
      })}
    </HStack>
  )
}

export default NavMenu
