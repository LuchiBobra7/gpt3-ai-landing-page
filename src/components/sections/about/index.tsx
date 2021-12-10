import {
  Flex,
  HStack,
  Container,
  Text,
  VStack,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import CustomHeading from 'components/heading'
import { possibilitiesItems } from './possibilities-data'
import CTALink from 'components/cta-link'

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container>
        <VStack
          w="full"
          spacing={{ base: 10, lg: 20 }}
          bg="blue.500"
          bgImage="radial-gradient(circle at 30% -100%, blue.500 25%, blue.500  85%,#1b78de 100%)"
          py={{ base: 8, lg: 14 }}
          px={{ base: 4, lg: 10 }}
        >
          <Flex
            spacing={4}
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <CustomHeading
              variant="subtitle"
              fontSize="xl"
              flex={1}
              mb={{ base: 4, lg: 0 }}
            >
              What is GPT-3
            </CustomHeading>
            <Text flex={2} fontSize="sm">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </Text>
          </Flex>
          <HStack
            w="full"
            spacing={{ md: 7 }}
            justifyContent={{ md: 'space-between' }}
            flexWrap="wrap"
            alignItems="flex-start"
          >
            <CustomHeading
              fontSize={{ base: '2xl', lg: '4xl' }}
              flex={{ lg: 1 }}
              maxW={{ lg: '40%' }}
              mb={{ base: 4, lg: 0 }}
            >
              The possibilities are beyond your imagination
            </CustomHeading>
            <CTALink href="/" flex={1} textAlign={{ lg: 'right' }} />
          </HStack>
          <SimpleGrid
            w="full"
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 8, lg: 16 }}
          >
            {possibilitiesItems.map((item, i) => (
              <Box key={i}>
                <CustomHeading
                  variant="subtitle"
                  flex={1}
                  mb={{ base: 4, lg: 7 }}
                >
                  {item.title}
                </CustomHeading>
                <Text fontSize="sm">{item.description}</Text>{' '}
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </SectionWrapper>
  )
}

export default AboutSection
