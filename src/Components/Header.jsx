import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <nav>
        <Link to={'/'}>
          <h1>HASAN's PORT</h1>
        </Link>
        <main>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/contact'}>Contact</Link>
        </main>

        <Button
          className="button"
          display={{ base: 'block', lg: 'none', md: 'none' }}
          pos={'fixed'}
          top={'4'}
          left={'2'}
          zIndex={'overlay'}
          colorScheme="green"
          p={'0'}
          w={'10'}
          h={'10'}
          borderRadius={'full'}
          onClick={onOpen}
        >
          <BiMenuAltLeft size={'20'} />
        </Button>
      </nav>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>HASAN's PORT</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/about'}>About</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Projects</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Contact</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
