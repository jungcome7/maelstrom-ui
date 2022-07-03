import React from 'react';
import styled from '@emotion/styled';

export default {
  title: 'Maelstrom/Welcome',
};

export const Welcome = () => <WelcomeBlock>Maelstrom UI</WelcomeBlock>;

const WelcomeBlock = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 50px;
`;

Welcome.story = {
  storyName: 'Welcome',
};
