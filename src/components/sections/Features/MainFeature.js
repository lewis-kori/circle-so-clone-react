import React from 'react';
import Header from './Header';
import { Box, Grid } from '@chakra-ui/react';
import Feature from './Feature';

const MainFeature = () => {
  return (
    <Box as='section' mt={4} mb={5}>
      <Header />
      <Grid
        h='80vh'
        templateRows='repeat(3, 1fr)'
        templateColumns={{sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)'}}
        gap={4}
        p={[3, 5, 5, 2]}
      >
        <Feature
          rowSpan={{sm: 3, md: 3, lg: 2}}
          colSpan={2}
          heading='👋
          Membership communities'
          text="Circle offers the flexibility to create a membership experience that's truly yours. With direct integrations to tools like Memberstack and Memberspace, Circle can fit seamlessly into the rest of your membership stack."
          features={[
            'Exclusive memberships',
            'Communities for courses',
            'Premium masterminds',
            'Paid newsletters',
            'Conference masterminds',
          ]}
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='⛳️
          Coaching communities'
          text='Provide a dedicated home for your coaching clients to get access to resources, connect with each other, and interact directly with you.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='📚
          Course communities'
          text='Add a community to your course, help your students connect with each other, and improve student-outcomes. Integrate with Teachable, Kajabi, and other course platforms.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🚲
          Product communities'
          text='Give your customers the space to share ideas with each other for how to best use your product.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🎯
          Brands & startups'
          text='Building an engaged community is a super power for any brand. Integrate your community directly into your product or website.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🧒🏽
          Microschools'
          text='Provide a space for your students, parents, and teachers to gather for your microschool pod. Share resources, discuss schoolwork, and stay organized.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='📰
          Newsletter communities'
          text='Your readers are smart and have so much in common. Help them meet each other and continue the discussion inside of your own community.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🎤
          Podcast communities'
          text='Your listeners want to keep the conversation going after the episode is over. Offer premium content they can’t get anywhere else.'
        />
      </Grid>
    </Box>
  );
};

export default MainFeature;
