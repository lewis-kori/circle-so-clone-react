import React from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import MainHero from '../components/sections/MainHero';
import PreviewCard from '../components/sections/Preview/PreviewCard';
import { Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Text as='span'>
      The modern community <br /> platform for {' '}
      <Text as='span' color='blue.600'>
        Creators
      </Text>
    </Text>
  );
};

const Landing = (props) => {
  return (
    <div>
      <LandingLayout>
        <MainHero title={Title()} />
        <PreviewCard />
      </LandingLayout>
    </div>
  );
};
export default Landing;
