import React from 'react';
import { Box, Image, Text, Button, Stack, Link } from '@chakra-ui/react';

function Card({ product, summary, longLine, imageUrl, buttonUrl }) {
  console.log(buttonUrl);
  return (
    <Box
      p={4}
      display={{ md: 'flex' }}
      maxWidth='32rem'
      borderWidth={1}
      rounded='2xl'
      margin={2}
    >
      <Image maxWidth='200px' margin='auto' src={imageUrl} alt='' />
      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='lg'
          letterSpacing='wide'
          color='black'
        >
          {product}
        </Text>
        <Text
          my={1}
          display='block'
          fontSize='md'
          lineHeight='normal'
          fontWeight='semibold'
        >
          {summary}
        </Text>
        <Text my={2} color='gray.500'>
          {longLine}
        </Text>
        <Link
          href={buttonUrl}
          isExternal
        >
          <Button bgColor='gray.100'>Show me!</Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default Card;
