import { FunctionComponent } from 'react';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';

import { Card } from '../Card';

export type PostCardProps = {
  title: string;
  description: string;
  slug: string;
};

export const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  description,
  slug,
}) => {
  return (
    <Card>
      <Link href={`/blog/${slug}`}>
          <Heading
            as="h2"
            color="brand.primary"
            fontSize="xl"
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Flex alignItems="center" marginTop=".5rem">
            
          </Flex>
          <Text fontSize="lg" color="brand.secondary" marginTop=".75rem">
            {description}
          </Text>
      </Link>
    </Card>
  );
};
