import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import '../styles/Form.scss';

const Contacts = () => {
  const fontColor = useColorModeValue('white', 'black');
  const bgImage = useColorModeValue('#a4949a, #1872db', '#be1a3b, #5e0819');
  const gradient = `linear-gradient(to right, ${fontColor}, ${bgImage})`;
  return (
    <Box bg={gradient}>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>

          <div>
            <div className="name">
              <h1>Name: </h1>
              <p>S. M. Mahmudul Hasan Rudra</p>
            </div>
            <div className="email">
              <h1>Email: </h1>
              <p>hasan.rudra99@gmail.com</p>
            </div>
            <div className="desc">
              <h1>Phone:</h1>
              <p>01632052898</p>
            </div>
          </div>
        </main>
      </div>
      );
    </Box>
  );
};

export default Contacts;
