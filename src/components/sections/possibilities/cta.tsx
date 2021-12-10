import {
  Stack,
  Container,
  Heading,
  Text,
  Button,
  Box,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import SectionWrapper from '../section-wrapper'

const CTA = () => {
  return (
    <SectionWrapper pb={{ xl: 0 }}>
      <Container>
        <Stack
          w="full"
          justifyContent="space-between"
          alignItems={{ md: 'flex-end' }}
          flexWrap="wrap"
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 6, lg: 24 }}
          py={14}
          px={10}
          borderRadius="2xl"
          bgGradient="linear(to-r, #AE67FA, #F49867)"
        >
          <VStack alignItems="flex-start">
            <Text fontSize="sm" color="black">
              Request Early Access to Get Started
            </Text>
            <Heading fontSize="2xl" color="black">
              Register today & start exploring the endless possibilities
            </Heading>
          </VStack>
          <Button variant="dark" borderRadius="full" size="lg">
            Get Started
          </Button>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export default CTA
