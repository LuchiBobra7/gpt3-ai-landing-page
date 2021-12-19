import { VStack } from '@chakra-ui/react'
import ScrollLink from './nav-link'
import navItems from './nav-data'
import { HEADER_HEIGHT } from 'constants/layout'

const MobileNav = () => {
  return (
    <VStack
      alignItems="center"
      spacing={{ base: 7, md: 12 }}
      as="nav"
      position="absolute"
      top="100%"
      left="0"
      w="full"
      py={10}
      background="rgba(1, 37, 76, 0.96)"
    >
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
            className="nav-link"
          >
            {title}
          </ScrollLink>
        )
      })}
    </VStack>
  )
}

export default MobileNav
