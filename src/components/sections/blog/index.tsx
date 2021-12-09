import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  AspectRatio,
  Box,
  VStack,
} from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import { postListItems } from './blog-data'
import Image from 'components/image'
import Link from 'components/link'
import Card from 'components/card'
import CustomHeading from 'components/heading'

const BlogsSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container>
        <CustomHeading pb={4} mb={12} maxW="60%">
          A lot is happening, We are blogging about it.
        </CustomHeading>
        <SimpleGrid
          templateColumns={{ lg: 'repeat(10,minmax(0,1fr))' }}
          templateRows="auto 1fr"
          rowGap={8}
          columnGap={8}
        >
          {postListItems.map((item, i) => (
            <Card
              key={i}
              as="article"
              _first={{ gridRow: 'span 2/span 2', gridColumn: 'span 4/span 4' }}
              gridColumn="span 3/span 3"
              sx={{
                '&:first-child .card-title': { fontSize: '4xl' },
              }}
            >
              <AspectRatio ratio={16 / 9} position="relative" w="full">
                <Image
                  bg="gray.400"
                  src={item.img}
                  objectFit="cover"
                  layout="fill"
                />
              </AspectRatio>
              <VStack alignItems="flex-start" spacing={4} px={6} pt={6}>
                <Text
                  as="time"
                  dateTime="2015-11-18"
                  fontSize="sm"
                  color="white"
                  fontWeight="500"
                >
                  Sep 26, 2021
                </Text>
                <Heading
                  fontSize="xl"
                  as="h3"
                  className="card-title"
                  fontWeight="800"
                >
                  {item.title}
                </Heading>

                {i === 0 && item.excerpt && <Text>{item.excerpt}</Text>}
              </VStack>
              <Box as="footer" mt="auto" p={6}>
                <Link fontSize="sm" fontWeight="bold" href="/">
                  Read full article
                </Link>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </SectionWrapper>
  )
}

export default BlogsSection
