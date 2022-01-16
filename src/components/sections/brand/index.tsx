import {
  Container,
  VStack,
  Text,
  Box,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import useBreakpoint from 'hooks/useBreakpoint'
import CustomHeading from 'components/heading'
import Users from './users'
import ParallaxImage from './parallax-image'
import Clients from './clients'
import { HEADER_HEIGHT } from 'constants/layout'

const BrandSection = () => {
  const { isLargeScreen } = useBreakpoint()
  return (
    <SectionWrapper
      id="brand"
      minH={{ lg: '100vh' }}
      display="flex"
      alignItems="center"
      pt={{ base: HEADER_HEIGHT.SM + 12, lg: HEADER_HEIGHT.LG }}
      pb={{ base: 4, lg: 0 }}
      bgImage="radial-gradient(circle at 25% 10%, rgb(0, 40, 83) 0px, #040c18 50%)"
    >
      <Container>
        <HStack flexWrap={{ base: 'wrap', lg: 'nowrap' }} spacing={0}>
          <VStack
            alignItems={{ base: 'center', lg: 'flex-start' }}
            minW="60%"
            mx={{ base: 'auto', lg: 0 }}
            maxW={{ base: '28rem', lg: '100%' }}
            spacing={{ base: 7, lg: 10 }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <CustomHeading fontSize={{ base: '3xl', lg: '6xl' }}>
              Let’s Build Something amazing with GPT-3 OpenAI
            </CustomHeading>
            <Text fontSize={{ base: 14, lg: 20 }} maxW="80%">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </Text>
            <Box display="flex" w={{ base: '100%', lg: '90%' }}>
              <Input
                variant="filled"
                type="email"
                size={isLargeScreen ? 'xl' : 'md'}
                flex={4}
                borderRightRadius={0}
                placeholder="Enter your email"
              />
              <Button
                variant="primary"
                borderLeftRadius={0}
                size={isLargeScreen ? 'xl' : 'md'}
                flex={2}
              >
                Get Started
              </Button>
            </Box>
            <Users />
          </VStack>
          {isLargeScreen && (
            <Box
              position="relative"
              _before={{
                content: '""',
                display: 'block',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                bgColor: '#0F6BCD',
                w: '285px',
                h: '285px',
                filter: 'blur(214px)',
              }}
            >
              <ParallaxImage />
            </Box>
          )}
        </HStack>
        <Clients mt={{ base: 4, lg: 10 }} />
      </Container>
    </SectionWrapper>
  )
}

export default BrandSection
