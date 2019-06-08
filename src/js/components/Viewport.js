import React from 'react';
import styled from 'styled-components';

import MainImage from './MainImage';
import About from './About';

const Wrapper = styled.section`
text-align: center;
`;

class Viewport extends React.Component {
  constructor() {
    super();
    this.styles = {
      width: '100%'
    };
  }

  render() {
    return (
      <div style={this.styles}>
        <MainImage />
        <Wrapper><About /></Wrapper>
      </div>
    );
  }
}

export default Viewport;