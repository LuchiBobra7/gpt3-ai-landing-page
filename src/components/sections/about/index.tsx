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
          spacing={{ base: 7, md: 16, lg: 24 }}
          bg="blue.500"
          bgImage="radial-gradient(circle at 30% -100%, #042c54 25%,#042c54 90%,#1b78de 110%);"
          py={{ base: 10, lg: 16 }}
          px={10}
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
            spacing={7}
            justifyContent={{ base: 'center', lg: 'space-between' }}
            textAlign={{ base: 'center', lg: 'left' }}
            flexWrap="wrap"
            alignItems={{ base: 'center', lg: 'flex-start' }}
          >
            <CustomHeading
              fontSize={{ base: '2xl', lg: '4xl' }}
              flex={{ lg: 1 }}
              maxW={{ lg: '40%' }}
              mb={{ base: 4, md: 0 }}
              lineHeight={1.54}
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
