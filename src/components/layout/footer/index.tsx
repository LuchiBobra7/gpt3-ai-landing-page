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

const Footer = () => {
  return (
    <Box as="footer" bg="#031B34">
      <Box className="footer-top" py={32}>
        <Container maxW="container.md" textAlign="center">
          <CustomHeading as="h1" variant="title" pb={4} mb={12}>
            Do you want to step in to the future before others
          </CustomHeading>
          <Button size="lg" variant="outline" borderRadius={0}>
            Request Early Access
          </Button>
        </Container>
      </Box>
      <Box className="footer-bottom" py={2} fontSize="sm">
        <Container>
          <SimpleGrid columns={{ base: 2, lg: 4 }}>
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
