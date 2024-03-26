import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import '../styles/animation.scss';
import '../styles/mediaQuery.scss';
import myImage from '../assets/image.png';

const About = () => {
  const fontColor = useColorModeValue('white', 'black');
  const bgImage = useColorModeValue('#a4949a, #1872db', '#be1a3b, #5e0819');
  const gradient = `linear-gradient(to right, ${fontColor}, ${bgImage})`;

  return (
    <Box bg={gradient} minHeight="100vh">
      <Container maxW="container.l">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing={8}
          py={8}
        >
          <Box flex="1" textAlign="center" mt={{ base: '8', md: '0' }}>
            <div
              className="image"
              style={{ maxWidth: '80%', margin: '0 auto' }}
            >
              <img
                src={myImage}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Box>
          <Box flex="1">
            <div className="title">
              <div className="title-inner">
                <div className="cafe">
                  <Box
                    className="cafe-inner"
                    fontSize={{ base: '8vw', lg: '4vw' }}
                  >
                    S. M. Mahmudul
                  </Box>
                </div>
                <Box className="mozart">
                  <Box
                    className="mozart-inner"
                    fontSize={{ base: '8vw', lg: '4vw' }}
                  >
                    Hasan Rudra
                  </Box>
                </Box>
              </div>
            </div>
            <Text
              lineHeight={{ lg: '150%', '2xl': '190%' }}
              letterSpacing={'widest'}
              ml={['0', '16']}
              mr={['0', '16']}
              mt={['14', '0']}
              mb={['14', '0']}
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize={{
                base: 'medium',
                sm: 'small',
                md: 'large',
                lg: 'medium',
                '2xl': 'large',
              }}
            >
              <h2 className="profession">
                Introducing myself as a React Developer
              </h2>
              <br />
              I am excited to introduce myself as a recent graduate with a
              Bachelor's degree in Computer Science and Engineering, from BRAC
              University.
              <br />I bring a strong technical skill set, including proficiency
              in Python, Java, and web development technologies like HTML, CSS,
              JavaScript, React JS, and Node JS. I'm also well-versed in data
              processing and have hands-on experience with tools like MongoDB
              and GitHub. Moreover, I'm continuously expanding my skill set by
              exploring new technologies and frameworks like Django and Vue JS.
              <br /> <br />
              Here you can check out my{' '}
              <a href="/Mahmudul's Resume.pdf" download className="resume-link">
                RESUME
              </a>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
