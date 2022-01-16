import { HStack, Container, Text, VStack, Box } from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import Image from 'components/image'
import CustomHeading from 'components/heading'
import CTA from './cta'
import CTALink from 'components/cta-link'

const PossibilitiesSection = () => {
  return (
    <SectionWrapper py={0} id="possibilities">
      <Container
        w="full"
        as={HStack}
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-end"
        spacing={{ base: 0, lg: 24 }}
        position="relative"
      >
        <Box
          display={{ base: 'none', lg: 'block' }}
          flex={{ lg: 1 }}
          position="relative"
        >
          <Image
            src="/assets/images/feature/feature.png"
            layout="responsive"
            quality={100}
            width={546}
            height={607}
          />
        </Box>
        <VStack
          w="full"
          flex={1}
          pr={{ base: 0, lg: 24 }}
          spacing={7}
          py={{ lg: 20 }}
          mx={{ base: 'auto', lg: 0 }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          maxW={{ base: '75%', lg: '100%' }}
        >
          <Text color="skyBlue.500">Request Early Access to Get Started</Text>
          <CustomHeading fontSize="4xl" lineHeight="1.333">
            The possibilities are beyond your imagination
          </CustomHeading>
          <Text lineHeight="1.7">
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
