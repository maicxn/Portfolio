import IData from "@/interfaces/IData";
import {
  Flex,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { generateTextLinearGradient } from "../../utils/generateGradient";
import api from "../api/hello";

export default function Blog() {
  const [data, setData] = useState<IData>();

  const config = {
    headers: {
      Authorization:
        "Bearer b67032ab8a9134f91d29f0a4530bcca1c2e08aeccd3deb5fb23cfbf4ca6126242efd1e72189c2cba25be8c70ede470b70a4c83794d24205859c18975bcdb179813811336a61f956d1ce366fb6cc6ee3732bb462391b54349542212808a42c4d8d9c54e3c23704fe80530bded6c1b6c6117fe74b3b8f36c1f1459322b2e6f3704",
    },
  };
  useEffect(() => {
    api.get('api/posts/', config)
    .then(response => setData(response.data))
  }, []);

  const property = {
    header: '"Lembre de mim pelo Soldado que sou."',
    subtitle:
      "Um blog sobre aprendizados, carreira, estudos e tudo aquilo que foi feito até chegarmos aqui.",
    full: "Todos os posts",
  };

  return (
    <Flex
      as="main"
      background="brand.background"
      width="100%"
      minHeight="calc(100vh - 8rem)"
      flexDirection="column"
      paddingTop={[4, 16]}
      paddingX={"1rem"}
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
          {property.full}
        </Text>
        <VStack width="100%">
          {data?.data.map((item) => {
            return  <PostCard title={item.attributes.title} description={item.attributes.content} slug={item.attributes.title}/>
          })}
        </VStack>
      </Flex>
    </Flex>
  );
}
