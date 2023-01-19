import { Flex, Heading, VStack, Text, useMediaQuery } from "@chakra-ui/react";
import { PostCard } from "../../components/PostCard";
import { generateTextLinearGradient } from "../../utils/generateGradient";

export default function Blog() {
  const property = {
    header: '"Lembre de mim pelo Soldado que sou."',
    subtitle: "Um blog sobre aprendizados, carreira, estudos e tudo aquilo que foi feito até chegarmos aqui.",
    full: "Todos os posts",
  };
  const [isDesktopScreen] = useMediaQuery("(min-width: 576px)");
  return (
    <Flex
    as="main"
    background="brand.background"
    width="100%"
    minHeight="calc(100vh - 8rem)"
    flexDirection="column"
    paddingTop={[4, 16]}
    paddingX={'1rem'}
    >
      <Flex width="100%" minHeight="4rem" justifyContent="flex-start">
        <Heading
          as="h1"
          fontSize="5xl"
          color="brand.primary"
          {...generateTextLinearGradient("cyan", "red")}
          whiteSpace="pre-wrap"
          wordBreak={"break-word"}
        >
          {property.header}
        </Heading>
      </Flex>
      <Text color="brand.secondary" fontSize="xl" marginTop="1rem"></Text>
      <Text color="brand.secondary" fontSize="xl" marginTop="1rem">
        {property.subtitle}
      </Text>
      <Flex as="section" flexDirection="column" marginTop="1.5rem">
        <Text
          as="p"
          fontSize="xl"
          color="brand.primary"
          fontWeight="bold"
          marginBottom="1.5rem"
        >
          {property.full }
        </Text>
        <VStack width="100%">
          <PostCard title={"Em Breve"} description={"Em Breve"} slug={""} />
          <PostCard title={"Em Breve"} description={"Em Breve"} slug={""} />
          <PostCard title={"Em Breve"} description={"Em Breve"} slug={""} />
        </VStack>
      </Flex>
    </Flex>
  );
}
