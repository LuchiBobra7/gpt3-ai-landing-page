import {
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

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container>
        <VStack
          w="full"
          spacing={20}
          bg="blue.500"
          bgImage="gradient.radialBlue"
          py={14}
          px={10}
        >
          <HStack
            spacing={4}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <CustomHeading variant="subtitle" fontSize="xl" flex="1">
              What is GPT-3
            </CustomHeading>
            <Text flex="2" fontSize="14px">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </Text>
          </HStack>
          <HStack
            w="full"
            spacing={7}
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="flex-start"
          >
            <CustomHeading fontSize="4xl" flex={{ lg: 1 }} maxW={{ lg: '40%' }}>
              The possibilities are beyond your imagination
            </CustomHeading>
            <Text flex="1" color="pomegranate.400" textAlign="right">
              Explore The Library
            </Text>
          </HStack>
          <SimpleGrid w="full" columns={{ base: 1, md: 3 }} spacing={16}>
            {possibilitiesItems.map((item, i) => (
              <Box key={i}>
                <CustomHeading variant="subtitle" flex="1" mb={7}>
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
