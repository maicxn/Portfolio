import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <>
      <Flex
        as="main"
        background="brand.background"
        width="100%"
        minHeight="calc(100vh - 8rem)"
        flexDirection="column"
        justifyContent="center"
        paddingX={'1rem'}
        >
        <Flex as="section" width="100%" flexDirection="column">
          <Heading as="h1" color="brand.primary" fontSize="5xl">
            Maicon Oliveira
          </Heading>
          <Box marginTop="1.5rem">
            <Text color="brand.primary" fontWeight={"bold"}>
              Front End Developer
            </Text>
            <Text color="brand.secondary">
              Crafting world-impact software that make people lives better.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
export default Home
