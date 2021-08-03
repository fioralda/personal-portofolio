import { Image, Text, Link, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex
      justifyContent='center'
      w='full'
      h='full'
      bgColor='fioralda.200'
      mt='40'
      pt='10'
      bgImage={`url("data:image/svg+xml;utf8, %3Csvg width='170%75' height='170%75' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' %3E %3Cdefs%3E %3CclipPath id='shape'%3E %3Cpath fill='currentColor' d='M750,579Q717,658,656,725Q595,792,505,776.5Q415,761,359,702Q303,643,154,571.5Q5,500,127.5,409Q250,318,317.5,232.5Q385,147,500,146.5Q615,146,759.5,176Q904,206,843.5,353Q783,500,750,579Z'%3E%3C/path%3E %3C/clipPath%3E %3C/defs%3E %3Cg clip-path='url(%23shape)'%3E %3Cpath fill='%23DDAF94' d='M750,579Q717,658,656,725Q595,792,505,776.5Q415,761,359,702Q303,643,154,571.5Q5,500,127.5,409Q250,318,317.5,232.5Q385,147,500,146.5Q615,146,759.5,176Q904,206,843.5,353Q783,500,750,579Z' /%3E %3C/g%3E %3C/svg%3E");`}
      bgRepeat='repeat'
      bgPosition='center'
      bgSize='cover'
      id='contact'
    >
      <Flex direction='column' justifyContent='center' mt='20'>
        <Flex>
          <Text fontSize='3xl'>You can find me... </Text>
        </Flex>
        <Flex pt='10'>
          <Link href='mailto: fioraldaosmenai99@gmail.com' isExternal>
            <Image src='gmail.svg' w='10' h='10' ml='20'></Image>
            fioraldaosmenai99@gmail.com
          </Link>
        </Flex>
        <Flex pt='5'>
          <Link href='https://github.com/fioralda'>
            <Image src='github.svg' w='10' h='10' ml='20'></Image>
            <Text ml='75' pt='1'>
              GitHub{' '}
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
