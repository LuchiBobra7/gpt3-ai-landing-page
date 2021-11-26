import { Container, HStack, Box, Button } from "@chakra-ui/react";
import Logo from "components/logo";
import NavMenu from "components/nav-menu";

const Header = () => {
  return (
    <Box
      as="header"
      py={12}
      position="sticky"
      top="0"
      boxShadow="sm"
      zIndex="10"
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        flexWrap="wrap"
      >
        <HStack spacing={10}>
          <Logo />
          <HStack
            alignItems="center"
            spacing={{ base: 4, md: 10 }}
            mt={{ base: 4, md: 0 }}
          >
            <NavMenu />
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Button variant="ghost">Sign In</Button>
          <Button colorScheme="orange">Sign Up</Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
