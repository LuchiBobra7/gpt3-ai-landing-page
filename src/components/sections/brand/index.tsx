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

const BrandSection = () => {
  const { isLargeScreen } = useBreakpoint()
  return (
    <SectionWrapper
      id="brand"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={32}
      pb={0}
      bgImage="radial-gradient(circle at 25% 10%, rgb(0, 40, 83) 0px, #040c18 50%)"
    >
      <Container>
        <HStack flexWrap={{ base: 'wrap', lg: 'nowrap' }} spacing={0}>
          <VStack flex="1" alignItems="flex-start" minWidth="55%" spacing={10}>
            <CustomHeading as="h1">
              Let’s Build Something amazing with GPT-3 OpenAI
            </CustomHeading>
            <Text fontSize={20} fontWeight="400" color="#81AFDD" maxW="80%">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </Text>
            <Box display="flex">
              <Input
                variant="filled"
                size="xl"
                flex="2"
                borderRightRadius={0}
                minW={{ lg: '85%' }}
                placeholder="Enter your email"
              />
              <Button variant="primary" borderLeftRadius={0} size="xl" flex="1">
                Get Started
              </Button>
            </Box>
            <Users />
          </VStack>
          {isLargeScreen && (
            <Box flex="1">
              <ParallaxImage />
            </Box>
          )}
        </HStack>
        <Clients py={10} />
      </Container>
    </SectionWrapper>
  )
}

export default BrandSection
