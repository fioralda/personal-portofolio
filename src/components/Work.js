import { SimpleGrid, Container, Text, Box } from '@chakra-ui/react';
import Card from './Card';

const Work = () => {
  const dataList = [
    {
      id: '1',
      product: 'iWolt',
      summary: 'Wolt clone homepage.',
      longLine:
        'I implemented this with ReactJS, Chakra-UI, React-Router-Dom, Zustand, Firebase.',
      imageUrl: 'iWolt.png',
      buttonUrl: 'https://github.com/fioralda/iWolt-app',
    },
    {
      id: '2',
      product: 'Expense Tracker app',
      summary: 'Track your monthly expencies.',
      longLine: 'I implemented this with ReactJS and CSS',
      imageUrl: 'expenseTracker.png',
      buttonUrl: 'https://github.com/fioralda/expense-tracker-app',
    },
    {
      id: '3',
      product: 'Mental Health app',
      summary: 'Track your fitness and take mental advice.',
      longLine: 'I implemented this with Flutter.',
      imageUrl: 'mentalHealth.jpg',
      buttonUrl: 'https://github.com/fioralda/MentalHealthAdvice',
    },
    {
      id: '4',
      product: 'Back Office System',
      summary: 'Lab project of OOP.',
      longLine: 'I implemented this with Java, Java Swing, MySQL.',
      imageUrl: 'java.png',
      buttonUrl: 'https://github.com/fioralda/backoffice-system',
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
