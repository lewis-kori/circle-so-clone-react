import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import MainContent from './MainContent';
import RightNav from './RightNav';
import { Flex } from '@chakra-ui/react';

const PreviewCard = () => {
  return (
    <Flex as='section' width='100%' direction='column' mb={100} >
      <Header />
      <Flex direction='row' width='90%' background='orange.50' height='72vh'>
        <LeftNav />
        <MainContent />
        <RightNav />
      </Flex>
    </Flex>
  );
};

export default PreviewCard;
