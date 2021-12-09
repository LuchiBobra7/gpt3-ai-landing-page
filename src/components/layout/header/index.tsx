import { useEffect, useState } from 'react'
import {
  Container,
  HStack,
  Box,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react'
import Logo from 'components/logo'
import NavMenu from 'components/nav-menu'
import useBreakpoint from 'hooks/useBreakpoint'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Header = () => {
  const [smallHeader, setSmallHeader] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmallHeader(window.pageYOffset > 30)
      )
    }
  }, [])
  const { isLargeScreen } = useBreakpoint()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box
      as="header"
      py={smallHeader ? 6 : 9}
      transition="all .15s ease-in"
      position="fixed"
      top="0"
      w="full"
      zIndex="10"
      bg={smallHeader ? 'rgba(1, 37, 76, 0.6)' : 'none'}
      shadow={smallHeader ? 'xl' : 'none'}
      backdropFilter={smallHeader ? 'saturate(180%) blur(20px)' : 'none'}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <HStack spacing={16}>
          <Logo />
          {isLargeScreen && (
            <HStack alignItems="center" spacing={{ base: 4, md: 12 }}>
              <NavMenu />
            </HStack>
          )}
        </HStack>
        <HStack spacing={7}>
          <Button variant="unstyled" size={smallHeader ? 'lg' : 'lg'}>
            Sign In
          </Button>
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
          {!isLargeScreen && (
            <>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
              <Collapse in={isOpen} animateOpacity>
                mobileNav
              </Collapse>
            </>
          )}
        </HStack>
      </Container>
    </Box>
  )
}

export default Header
