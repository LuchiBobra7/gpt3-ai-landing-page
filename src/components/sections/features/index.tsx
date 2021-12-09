import { HStack, Container, Text, VStack, Box } from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import CustomHeading from 'components/heading'
import { featureItems } from './features-data'

const FeaturesSection = () => {
  return (
    <SectionWrapper id="features">
      <Container w="full" justifyContent="space-between" spacing={20}>
        <HStack
          w="full"
          spacing={12}
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <VStack
            w="full"
            flex={{ lg: 1 }}
            spacing={12}
            alignItems="flex-start"
            mb={4}
          >
            <CustomHeading fontSize="4xl" flex="1">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </CustomHeading>
            <Text color="pomegranate.400">
              Request Early Access to Get Started
            </Text>
          </VStack>
          <Box as="dl" ml={0} pl={0} flex={1.5}>
            {featureItems.map((item, i) => (
              <HStack key={i} mb={7} spacing={{ lg: 32 }} flexWrap="wrap">
                <CustomHeading
                  variant="subtitle"
                  as="dt"
                  flex={{ lg: 1 }}
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
