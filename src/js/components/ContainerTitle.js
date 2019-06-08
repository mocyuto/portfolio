import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 30px;
`;

class ContainerTitle extends React.Component {
  render() {
    return (
      <Title>{this.props.text}</Title>
    );
  }
}

export default ContainerTitle;