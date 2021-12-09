import {
  HStack,
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
    <SectionWrapper pb={0}>
      <Container>
        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="flex-end"
          spacing={24}
          py={14}
          px={10}
          borderRadius="2xl"
          bgGradient="linear(to-r, #AE67FA, #F49867)"
        >
          <VStack alignItems="flex-start">
            <Text fontSize="sm" color="black">
              Request Early Access to Get Started
            </Text>
            <Heading fontSize="2xl" fontWeight="800" color="black">
              Register today & start exploring the endless possibilities
            </Heading>
          </VStack>
          <Button variant="dark" borderRadius="full" size="lg">
            Get Started
          </Button>
        </HStack>
      </Container>
    </SectionWrapper>
  )
}

export default CTA
