import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Viewport from './Viewport';

const Wrapper = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Viewport />
      </Wrapper>
    );
  }
}

export default App;