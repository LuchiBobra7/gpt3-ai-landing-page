import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  AspectRatio,
  Box,
  LinkBox,
  VStack,
} from '@chakra-ui/react'
import SectionWrapper from '../section-wrapper'
import LinkOverlay from 'components/link/link-overlay'
import Image from 'components/image'
import CustomHeading from 'components/heading'
import { GetPostsQuery } from 'data/queries/__generated__/getPosts'

type Props = {
  posts: GetPostsQuery['posts']
}

const BlogsSection = ({ posts }: Props) => {
  return (
    <SectionWrapper id="blog">
      <Container>
        <CustomHeading
          pb={4}
          mb={12}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          mx={{ base: 'auto', lg: 0 }}
          textAlign={{ base: 'center', lg: 'left' }}
          maxW={{ base: '75%', lg: '100%' }}
        >
          A lot is happening, We are blogging about it.
        </CustomHeading>
        <SimpleGrid
          templateColumns={{
            md: 'repeat(2,minmax(0,1fr))',
            lg: 'repeat(7,minmax(0,1fr))',
          }}
          templateRows="auto 1fr"
          rowGap={8}
          columnGap={8}
        >
          {posts.map((item, i) => (
            <LinkBox
              key={i}
              as="article"
              display="flex"
              flexDirection="column"
              bg="blue.500"
              className="blog-item"
              gridColumn={{
                lg: 'span 2/span 2',
              }}
              sx={{
                '&:first-of-type': {
                  gridRow: { md: 'span 2/span 2' },
                  gridColumn: { md: 'span 2/span 2', lg: 'span 3/span 3' },
                },
                '&:first-of-type .card-title': { fontSize: { md: '4xl' } },
              }}
            >
              <AspectRatio
                ratio={16 / 9}
                bg="blue.700"
                position="relative"
                w="full"
              >
                <Image
                  src={item.image?.thumbnail || ''}
                  objectFit="cover"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={item.image?.blurDataURL || ''}
                  transition="transform 1s"
                  sx={{
                    '.blog-item:hover &': {
                      transform: 'scale(1.1)',
                    },
                  }}
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
                <Heading fontSize={{ lg: 'xl' }} as="h3" className="card-title">
                  {item.title}
                </Heading>
              </VStack>
              <Box as="footer" mt="auto" p={6}>
                <LinkOverlay fontSize="sm" href="/">
                  Read full article
                </LinkOverlay>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </SectionWrapper>
  )
}

export default BlogsSection
