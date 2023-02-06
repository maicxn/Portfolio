import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import { generateTextLinearGradient } from "../../utils/generateGradient";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  const property = {
    header: '"Eu sou a continuação de um sonho."',
    intro:
      "Olá! Eu me chamo Maicon Oliveira, comecei como desenvolvedor de software em 2020 quando entrei na Etec Albert Einstein no curso de Desenvolvimento de Sistemas.",
    text: "Atualmente sou Estagiário em Desenvolvimento Front End. Desde o meu início, busco resolver os problemas cotidianos com criação de software, usando conceitos de desenvolvimento de software, eficiência de algoritmos e escolher a ferramenta certa para o trabalho.",
    close:
      "Eu sou a continuação de um sonho, da minha mãe, do meu pai, de todos que vieram antes de mim, daqueles que sangraram pra hoje eu poder sorrir.",
    formation: "Formação:",
    career: "Carreira:",
    school: "Etec Albert Einstein",
    study: "Técnico em Desenvolvimento de Sistemas",
    company: "E-Gestão Soluções",
    work: "Estagiário em Desenvolvimento Front End",
  };

  const [isDesktopScreen] = useMediaQuery("(min-width: 576px)");

  return (
    <>
      <Flex
        as="main"
        background="brand.background"
        width="100%"
        minHeight="calc(100vh - 8rem)"
        flexDirection="column"
        paddingTop={[4, 16]}
        paddingX={"1rem"}
      >
        <Heading
          as="h1"
          fontSize="5xl"
          color="brand.primary"
          {...generateTextLinearGradient("cyan", "purple")}
          whiteSpace="pre-wrap"
          wordBreak={"break-word"}
        >
          {property.header}
        </Heading>
        <Flex as="section" flexDirection="column" marginTop={isDesktopScreen ? "1.5rem" : "23rem"}>
          <Flex
            as={"section"}
            justifyContent={["center", "flex-start"]}
            flexWrap={["wrap-reverse", "wrap-reverse", "wrap-reverse"]}
            marginY={"2rem"}
            gap={["1rem"]}
            height={400}
          >
            <Flex
              flex={1}
              flexDirection={"column"}
              justifyContent={["center", "flex-start"]}
              flexWrap={["wrap-reverse", "wrap-reverse", "wrap-reverse"]}
              gap={["1rem"]}
            >
              <Box color="brand.secondary" fontSize="medium">
                {property.intro}
              </Box>
              <Box color="brand.secondary" fontSize="medium">
                {property.text}
              </Box>
              <Box color="brand.secondary" fontSize="medium">
                {property.close}
              </Box>
            </Flex>
            <Image
              src="https://github.com/maicxn.png"
              alt="Maicon Oliveira - Front End Developer"
              title="Maicon Oliveira - Front End Developer"
              width={350}
              height={390}
              objectFit="cover"
              borderRadius={8}
              flexShrink={0}
              flex={1}
            />
          </Flex>
        </Flex>
        <Text as="p" fontSize="xl" color="brand.primary" fontWeight="bold">
          {property.formation}
        </Text>
        <Flex
          as="p"
          fontSize="medium"
          color="brand.secondary"
          flexDirection={!isDesktopScreen ? "column" : "row"}
        >
          <Link
            fontSize="medium"
            color="brand.primary"
            href="https://www.etecalberteinstein.com.br"
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={"underline"}
            textUnderlineOffset={2}
            _hover={{
              opacity: 0.8,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {property.school}
          </Link>
          <Text marginX="0.5rem">{isDesktopScreen && "•"}</Text>
          <Text as="p">{property.study}</Text>
        </Flex>
        <Text as="p" fontSize="xl" color="brand.primary" fontWeight="bold">
          {property.career}
        </Text>
        <Flex
          as="p"
          fontSize="medium"
          color="brand.secondary"
          flexDirection={!isDesktopScreen ? "column" : "row"}
        >
          <Link
            fontSize="medium"
            color="brand.primary"
            href="http://www.e-gestao.com.br"
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={"underline"}
            textUnderlineOffset={2}
            _hover={{
              opacity: 0.8,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {property.company}
          </Link>
          <Text marginX="0.5rem">{isDesktopScreen && "•"}</Text>
          <Text as="p">{property.work}</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default AboutPage;
