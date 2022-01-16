import {
  HStack,
  Container,
  Text,
  VStack,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
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
          spacing={{ lg: 24 }}
          justifyContent={{ base: 'center', lg: 'space-between' }}
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <VStack
            w="full"
            flex={{ lg: 1 }}
            spacing={{ base: 6, lg: 9 }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            mx={{ base: 'auto', lg: 0 }}
            textAlign={{ base: 'center', lg: 'left' }}
            maxW={{ base: '75%', lg: '100%' }}
            mb={{ base: 12, lg: 4 }}
          >
            <CustomHeading fontSize={{ base: '2xl', lg: '4xl' }} flex={1}>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </CustomHeading>
            <CTALink title="Request Early Access to Get Started" href="/" />
          </VStack>
          <SimpleGrid
            as="dl"
            flex={{ lg: 1.5 }}
            columns={{ base: 2, lg: 1 }}
            spacingX={{ base: 12, lg: 0 }}
          >
            {featureItems.map((item, i) => (
              <HStack
                key={i}
                mb={14}
                spacing={{ base: 0, lg: 24 }}
                flexWrap="wrap"
              >
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
          </SimpleGrid>
        </HStack>
      </Container>
    </SectionWrapper>
  )
}

export default FeaturesSection
