import { useLayoutEffect, useState } from 'react'
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
import MobileNav from 'components/nav-menu/mobile-nav'
import useBreakpoint from 'hooks/useBreakpoint'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { HEADER_HEIGHT } from 'constants/layout'

const Header = () => {
  const [smallHeader, setSmallHeader] = useState(false)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmallHeader(window.pageYOffset > 30)
      )
    }
  }, [])

  const { isLargeScreen, isXLargeScreen } = useBreakpoint()
  const { isOpen, onToggle } = useDisclosure()
  const headerLgScreenHeight = smallHeader ? HEADER_HEIGHT.MD : HEADER_HEIGHT.LG
  const headerLgScreenBg = !isLargeScreen ? 'rgba(26, 32, 44, 0.8)' : 'none'
  const headerLgFilter =
    smallHeader && isLargeScreen ? 'saturate(180%) blur(10px)' : 'none'
  return (
    <Box
      as="header"
      py={4}
      display="flex"
      alignItems="center"
      transition="all 0.2s ease-in-out"
      position="fixed"
      top={0}
      w="full"
      height={{ base: HEADER_HEIGHT.SM, lg: headerLgScreenHeight }}
      zIndex={10}
      bg={{ base: 'rgba(1, 37, 76, 0.96)', lg: headerLgScreenBg }}
      shadow={smallHeader ? 'xl' : 'none'}
      backdropFilter={headerLgFilter}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <HStack spacing={16}>
          <HStack spacing={4}>
            {!isXLargeScreen && (
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'unstyled'}
                aria-label={'Toggle Navigation'}
              />
            )}
            <Logo />
          </HStack>
          {isXLargeScreen && (
            <HStack alignItems="center" spacing={{ base: 4, md: 12 }}>
              <NavMenu />
            </HStack>
          )}
        </HStack>
        <HStack spacing={7}>
          <Button variant="unstyled" size={isLargeScreen ? 'lg' : 'sm'}>
            Sign In
          </Button>
          <Button variant="primary" size={isLargeScreen ? 'lg' : 'sm'}>
            Sign Up
          </Button>
        </HStack>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Header
