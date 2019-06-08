import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 100%;
max-width: 100%;
height: auto;
`;

class MainImage extends React.Component {
  render() {
    return (
      <Img src={'img/honeymoon.jpg'} />
    );
  }
}
export default MainImage;