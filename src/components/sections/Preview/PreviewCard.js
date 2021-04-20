import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import MainContent from './MainContent';
import RightNav from './RightNav';
import { Flex,useColorModeValue } from '@chakra-ui/react';

const PreviewCard = () => {
  const bg = useColorModeValue('orange.50', 'gray.700')
  return (
    <Flex as='section' width={['250vw','100%']} direction='column' mb='2.5rem' overflow={['scroll', 'scroll']}>
      <Header />
      <Flex direction='row' width={['250vw','100%']} background={bg} height='72vh'>
        <LeftNav />
        <MainContent />
        <RightNav />
      </Flex>
    </Flex>
  );
};

export default PreviewCard;
