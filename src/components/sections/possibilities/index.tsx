import { HStack, Container, Text, VStack, Box } from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import Image from 'components/image'
import CustomHeading from 'components/heading'
import CTA from './cta'
import CTALink from 'components/cta-link'

const PossibilitiesSection = () => {
  return (
    <SectionWrapper py={{ base: 0 }} id="possibilities">
      <Container
        w="full"
        as={HStack}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={{ lg: 24 }}
      >
        <Box flex={{ lg: 1 }} position="relative">
          <Image
            src="/assets/images/feature.png"
            layout="responsive"
            width={546}
            height={607}
          />{' '}
        </Box>
        <VStack
          w="full"
          flex={1}
          spacing={7}
          alignItems="flex-start"
          py={{ lg: 20 }}
        >
          <Text color="skyBlue.500">Request Early Access to Get Started</Text>
          <CustomHeading fontSize="4xl">
            The possibilities are beyond your imagination
          </CustomHeading>
          <Text>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Text>
          <CTALink title="Request Early Access to Get Started" href="/" />
        </VStack>
      </Container>
      <CTA />
    </SectionWrapper>
  )
}

export default PossibilitiesSection
