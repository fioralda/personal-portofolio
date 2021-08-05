import { HStack, Link, Container, chakra } from '@chakra-ui/react';
const NavBar = () => {
  return (
    <chakra.div className='primary-navigation'>
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
            <Link
              href='#contact'
              color='white'
              bgColor='fioralda.100'
              rounded='md'
              p='1'
            >
              Contact
            </Link>
          </HStack>
        </Container>
      </HStack>
    </chakra.div>
  );
};
export default NavBar;
