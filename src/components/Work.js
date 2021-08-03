import {
  SimpleGrid,
  Container,
  Text,
  Box,
} from '@chakra-ui/react';
import Card from './Card';

const Work = () => {
  const dataList = [
    {
      id: '1',
      product: 'iWolt',
      summary: 'This is a summary, can be any length',
      longLine: 'Very short, can be any description',
      imageUrl: 'iWolt.png',
      buttonUrl: 'https://github.com/fioralda/iWolt-app',
    },
    {
      id: '2',
      product: 'Expense Tracker app',
      summary:
        'Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf',
      longLine: 'Billy Bob Bob Bob Bob likes Markiplier gameplay videos',
      imageUrl: 'expenseTracker.png',
      buttonUrl: 'https://github.com/fioralda/expense-tracker-app',
    },
    {
      id: '3',
      product: 'Mental Health app',
      summary: 'Finalize them summary, hurry, we are close to deadline',
      longLine: 'Wow, this is very descriptive! I wonder how long it is',
      imageUrl: 'mentalHealth.jpg',
      buttonUrl: 'https://github.com/fioralda/MentalHealthAdvice',
    },
  ];

  return (
    <Container maxW='80rem' centerContent pt='40' id='work'>
      <Text fontSize='3xl'>These are some of my Projects</Text>
      <Box w='50vw' h='1px' bgColor='gray.300' my='2' mb='10'></Box>
      <SimpleGrid columns={[1, 2, 1, 2]}>
        {dataList.map(
          ({ id, product, summary, longLine, imageUrl, buttonUrl }) => (
            <Card
              key={id}
              product={product}
              summary={summary}
              longLine={longLine}
              imageUrl={imageUrl}
              buttonUrl={buttonUrl}
            />
          )
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Work;
