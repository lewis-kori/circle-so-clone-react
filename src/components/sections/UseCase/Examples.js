import { Stack, Button, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';

const TabBtn = ({ text, tab, activeTab, handleClick }) => {
  const renderCondition = tab === activeTab;

  return (
    <Button
      colorScheme={renderCondition ? 'twitter' : 'white'}
      variant='outline'
      onClick={() => handleClick(tab)}
      // isFullWidth={[true, false]}
      // mb={{sm: '0.4rem', md: '0.4rem', lg: '0.4rem'}}
      mb={5}
    >
      {text}
    </Button>
  );
};

const TabContent = ({ imageUrl }) => {
  return (
    <Box
      as='div'
      backgroundColor='gray.50'
      p={5}
      mt={5}
      mx='auto'
      w={['70%', '70%', '70%', '70%', '100%']}
    >
      <Image
        src={imageUrl}
        alt='use case'
        fallbackSrc='https://via.placeholder.com/150'
      />
    </Box>
  );
};

const Examples = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  let imageUrl =
    'https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f31148adb976231d0f3f948_feature-organize-discussion.png';

  if (activeTab === 'spaces') {
    imageUrl =
      'https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f311bc2856f6e655f90d327_feature-private-groups.png';
  } else if (activeTab === 'groups') {
    imageUrl =
      'https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f311c272aa4a3627f890a63_feature-interest-groups.png';
  }
  return (
    <Box as='div'>
      <Stack
        direction={['column', 'column', 'row', 'row']}
        spacing='auto'
        align='center'
        mx='8rem'
      >
        <TabBtn
          text='Organize Discussions'
          tab='discussions'
          activeTab={activeTab}
          handleClick={setActiveTab}
        ></TabBtn>
        <TabBtn
          text='Create Private Spaces'
          tab='spaces'
          activeTab={activeTab}
          handleClick={setActiveTab}
        ></TabBtn>
        <TabBtn
          text='Empower Interest Groups'
          tab='groups'
          activeTab={activeTab}
          handleClick={setActiveTab}
        ></TabBtn>
      </Stack>
      <TabContent imageUrl={imageUrl} />
    </Box>
  );
};

export default Examples;
