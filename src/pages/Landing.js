import React from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import MainHero from '../components/sections/MainHero';
import PreviewCard from '../components/sections/Preview/PreviewCard';
import MainFeature from '../components/sections/Features/MainFeature';
import Mission from '../components/sections/Mission/Mission';
import Single from '../components/sections/Review/Single';
import UseCase from '../components/sections/UseCase/UseCase';
import { Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Text as='span'>
      The modern community <br /> platform for{' '}
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
        <MainFeature />
        <Single
          text='In the last edition of our course, we included a Circle community. It has had a profound impact on the community-building aspect of the course. It is far more modern, user-friendly, interactive, and multifaceted than any other platform out there, and we’re making it the home of our student community.'
          logo='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2a8dfbe566333b8805584c_forte-labs-p-500.png'
          my={20}
        />
        <Mission ctaLink='/signup' ctaText='start your community today' />
        <UseCase />
        <Single
          text='We shifted our 60k member community off of Facebook and on to Circle, to give our creators a more private space to share big wins, collaborate, find a support system, and more.'
          logo='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2a8e45cf28d917eef861ba_teachable-dark.png'
          my={20}
        />
      </LandingLayout>
    </div>
  );
};
export default Landing;
