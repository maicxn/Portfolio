import { Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { FiUser } from 'react-icons/fi';
import { Content } from "@/styles/poststyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../api/hello";
import IData from "@/interfaces/IData";
import { SEO } from "@/components/SEO"

const PostPage: NextPage = () => {
    const [data, setData] = useState<IData>();

  
    const router = useRouter();
    const { slug } = router.query;

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
  
    return (
      <Flex
        as="main"
        background="brand.background"
        width="100%"
        minHeight="calc(100vh - 8rem)"
        flexDirection="column"
        paddingTop={[4, 16]}
        paddingX={'1.75rem'}
      >
        {data?.data.map((item) => {
            return (
                <>
                <SEO
          title={`${item.attributes.title}`}
          description={`${item.attributes.content}`}
          image={item.attributes.image}
          url={`/blog/${item.attributes.title}`}
        />
        <Heading color="brand.primary" fontWeight={900}>
          {item.attributes.title}
        </Heading>
        <HStack spacing="2rem" marginTop={'2rem'}>
          <Flex alignItems="center" gap="1rem">
            <Icon as={FiUser} w={6} h={6} color="brand.secondary" />
            <Text as="span" color="brand.secondary">
              {'Maicon Oliveira'}
            </Text>
          </Flex>
        </HStack>
        <Content
          dangerouslySetInnerHTML={{
            __html: item.attributes.content || '',
          }}
        />
                </>
            )
        })}
      </Flex>
    );
  };

  export default PostPage;
