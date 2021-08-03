import { Stack, Text } from '@chakra-ui/react';

const Main = () => {
  return (
    <Stack
      bgColor='fioralda.200'
      h='full'
      w='full'
      justifyContent='center'
      alignItems='center'
      pt='60'
      pb='500'
      bgSize='cover'
      bgRepeat='round'
      bgPosition='center'
      bgImage={`url("data:image/svg+xml;utf8, %3Csvg width='100%25' height='100%25' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' %3E %3Cdefs%3E %3CclipPath id='shape'%3E %3Cpath fill='currentColor' d='M750,579Q717,658,656,725Q595,792,505,776.5Q415,761,359,702Q303,643,154,571.5Q5,500,127.5,409Q250,318,317.5,232.5Q385,147,500,146.5Q615,146,759.5,176Q904,206,843.5,353Q783,500,750,579Z'%3E%3C/path%3E %3C/clipPath%3E %3C/defs%3E %3Cg clip-path='url(%23shape)'%3E %3Cpath fill='%23DDAF94' d='M750,579Q717,658,656,725Q595,792,505,776.5Q415,761,359,702Q303,643,154,571.5Q5,500,127.5,409Q250,318,317.5,232.5Q385,147,500,146.5Q615,146,759.5,176Q904,206,843.5,353Q783,500,750,579Z' /%3E %3C/g%3E %3C/svg%3E");`}
      id='about'
    >
      <Text textColor='white' fontSize='5xl'>
        Hi, I'm Fioralda
      </Text>
      <Text textColor='white'>a web developer</Text>
    </Stack>
  );
};
export default Main;
