import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import myImage from '../assets/My Image.jpg';
import background from '../assets/background.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const fontColor = useColorModeValue('white', 'black');
  const bgImage = useColorModeValue(
    '#676598, #2591b6, #15dd80',
    'rgba(253, 187, 45, 100)'
  );
  const gradient = `linear-gradient(to right, ${fontColor}, ${bgImage})`;
  return (
    <Box bg={gradient}>
      <Container minH={'100vh'} maxW={'container.l'} p={['0', '4']}>
        <Stack
          h="full"
          mt={['16', '0']}
          p={['2', '4']}
          alignItems="center"
          direction={'column'}
        >
          {/*<Image src={myImage} mb={['10', '0']} w={'100%'} h={'100%'} />*/}
          <Container
            w={'100%'}
            h={['35vh', '65vh']}
            bgGradient={'linear(to-tr, gray.200, yellow.200, pink.100)'}
            // m={'0'}
          >
            <Text
              bgGradient="linear(to-l, gray.800, yellow.500, red.600)"
              bgClip="text"
              fontSize={{
                base: '1xl',
                sm: '2xl',
                md: '5xl',
                lg: '4xl',
                '2xl': '5xl',
              }}
              mt={['2rem', '']}
              mb={['2rem', '']}
              fontWeight={'extra-bold'}
              textAlign={'center'}
            >
              Assisting you in your endeavors would undoubtedly be the most
              rewarding contribution I could make.
            </Text>
          </Container>
          <Text
            lineHeight={'180%'}
            letterSpacing={'widest'}
            p={['4', '16']}
            mb={['0', '0']}
            w={['100%', '100%']}
            textAlign={'center'}
            fontSize={['12', '24']}
          >
            -
            <i>
              "I strive for two things in design: simplicity and clarity. Great
              design is born of those two things."
            </i>
            <br />
            <br />
            Hello Dear Visitor! <br />
            Accept my warm welcome. I am a software engineer as well as a
            frontend web developer who has a passion for making the web
            application more interactive to the user. I am also gradually
            increasing my knowledge to become a full stack web developer. For me
            enrich my knowledge by learning new technologies is a passion.
          </Text>
          <Button
            mb={['14', '0']}
            variant={'ghost'}
            colorScheme="#dd1526"
            textTransform={'uppercase'}
            fontSize={['12', '20']}
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
          >
            <Link to={'/about'}>Learn More</Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
