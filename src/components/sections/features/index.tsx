import { HStack, Container, Text, VStack, Box } from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import CustomHeading from 'components/heading'
import { featureItems } from './features-data'
import CTALink from 'components/cta-link'

const FeaturesSection = () => {
  return (
    <SectionWrapper id="features">
      <Container w="full" justifyContent="space-between" spacing={20}>
        <HStack
          w="full"
          spacing={{ lg: 12 }}
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <VStack
            w="full"
            flex={{ lg: 1 }}
            spacing={{ base: 6, lg: 12 }}
            alignItems="flex-start"
            mb={4}
          >
            <CustomHeading fontSize={{ base: '2xl', lg: '4xl' }} flex={1}>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </CustomHeading>
            <CTALink title="Request Early Access to Get Started" href="/" />
          </VStack>
          <Box as="dl" flex={1.5}>
            {featureItems.map((item, i) => (
              <HStack key={i} mb={7} spacing={{ lg: 32 }} flexWrap="wrap">
                <CustomHeading
                  variant="subtitle"
                  as="dt"
                  flex={{ lg: 1 }}
                  mb={{ base: 4, lg: 0 }}
                  fontSize="lg"
                >
                  {item.title}
                </CustomHeading>
                <Text as="dd" flex={{ lg: 2 }} fontSize="sm">
                  {item.description}
                </Text>
              </HStack>
            ))}
          </Box>
        </HStack>
      </Container>
    </SectionWrapper>
  )
}

export default FeaturesSection
