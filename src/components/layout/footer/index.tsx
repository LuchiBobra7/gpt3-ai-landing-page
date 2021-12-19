import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  List,
  ListItem,
} from '@chakra-ui/react'
import Logo from 'components/logo'
import Link from 'components/link'
import { menuItems } from './nav-data'
import CustomHeading from 'components/heading'
import useBreakpoint from 'hooks/useBreakpoint'

const Footer = () => {
  const { isLargeScreen } = useBreakpoint()
  return (
    <Box as="footer" bg="blue.500">
      <Box py={{ base: 12, lg: 20 }}>
        <Container maxW="container.lg" textAlign="center">
          <CustomHeading
            as="h1"
            variant="title"
            fontSize={{ base: '3xl', lg: '6xl' }}
            pb={4}
            mb={{ base: 4, lg: 12 }}
          >
            Do you want to step in to the future before others
          </CustomHeading>
          <Button
            size={isLargeScreen ? 'lg' : 'md'}
            variant="outline"
            borderRadius={0}
          >
            Request Early Access
          </Button>
        </Container>
      </Box>
      <Box
        py={10}
        fontSize="sm"
        borderTopWidth={1}
        borderTopColor="blackAlpha.400"
      >
        <Container>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }}>
            <Box maxW="60%">
              <Logo />
              <Text fontSize="xs" my={2}>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </Text>
            </Box>
            {menuItems.map((item, i) => (
              <Box key={i}>
                <Heading as="h5" size="xs" mb="0.75rem">
                  {item.title}
                </Heading>
                <List spacing="0.5rem">
                  {item.navigation.map((listItem, i) => (
                    <ListItem key={i}>
                      <Link
                        key={i}
                        href={listItem.href}
                        fontSize="sm"
                        _hover={{ textDecoration: 'underline' }}
                        isExternal={listItem.isExternal}
                      >
                        {listItem.title}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
            <Box>
              <Heading as="h5" size="xs" mb="0.75rem">
                Get in touch
              </Heading>
              <Text fontSize="xs">Crechterwoord K12 182 DK Alknjkcb</Text>
              <Text fontSize="xs">085-132567</Text>
              <Text fontSize="xs">info@payme.net</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
