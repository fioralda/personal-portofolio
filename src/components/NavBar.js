import { HStack, Link, Container } from '@chakra-ui/react';
const NavBar = () => {
  return (
    <HStack
      justifyContent='flex-end'
      w='100'
      spacing='24px'
      p='5'
      bgColor='white'
      color='black'
    >
      <Container maxW='container.lg'>
        <HStack justifyContent='flex-end' fontSize='2xl' spacing='6'>
          <Link href='#about'>About</Link>
          <Link href='#work'>Work</Link>
          <Link href='#contact'>Contact</Link>
        </HStack>
      </Container>
    </HStack>
  );
};
export default NavBar;
