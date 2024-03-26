import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import '../styles/Projects.scss';
import project1 from '../assets/p1.png';
import project2 from '../assets/p2.png';
import project3 from '../assets/p3.png';
import project4 from '../assets/p4.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  const fontColor = useColorModeValue('white', 'black');
  const bgImage = useColorModeValue(
    '#ced7de, #2a7b7d, #0e2245',
    '#1fa288, #4959a1'
  );
  const gradient = `linear-gradient(to right, ${fontColor}, ${bgImage})`;

  return (
    <Box bg={gradient}>
      <Container minH={'100vh'} maxW={'Container.l'} p={'5'}>
        <section class="middle">
          <div class="right">
            <div class="blogs">
              <div class="blog">
                <Image src={project1} alt="" id="blog-image" />
                <Button
                  w={'200px'}
                  ml={'0.5rem'}
                  mb={['14', '5']}
                  variant={'ghost'}
                  colorScheme="#dd1526"
                  textTransform={'uppercase'}
                  fontSize={['12', '20']}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                  }}
                >
                  <Link
                    to={'https://mahmudul-rudra.github.io/world-cup-gallery/'}
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                </Button>
                <h4>World Cup Gallery</h4>
              </div>

              <div class="blog">
                <Image src={project3} alt="" id="blog-image" />
                <Button
                  w={'200px'}
                  ml={'0.5rem'}
                  mb={['14', '5']}
                  variant={'ghost'}
                  colorScheme="#dd1526"
                  textTransform={'uppercase'}
                  fontSize={['12', '20']}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                  }}
                >
                  <Link
                    to={
                      'https://mahmudul-rudra.github.io/single-page-application/'
                    }
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                </Button>
                <h4>NewBeg- My First React Single Page App</h4>
              </div>

              <div class="blog">
                <Image src={project4} alt="" id="blog-image" />
                <Button
                  w={'200px'}
                  ml={'0.5rem'}
                  mb={['14', '5']}
                  variant={'ghost'}
                  colorScheme="#dd1526"
                  textTransform={'uppercase'}
                  fontSize={['12', '20']}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                  }}
                >
                  <Link
                    to="https://mahmudul-rudra.github.io/multi-theme-application/"
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                </Button>
                <h4>Video Hub- Multi Theme Application</h4>
              </div>

              <div class="blog">
                <Image src={project2} alt="football" id="blog-image" />
                <Button
                  w={'200px'}
                  ml={'0.5rem'}
                  mb={['14', '5']}
                  variant={'ghost'}
                  colorScheme="#dd1526"
                  textTransform={'uppercase'}
                  fontSize={['12', '20']}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)',
                  }}
                >
                  <Link
                    to={
                      'https://mahmudul-rudra.github.io/react-counter-application/'
                    }
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                </Button>
                <h4>A Simple Counter Application Made with React</h4>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Box>
  );
};

export default Projects;
