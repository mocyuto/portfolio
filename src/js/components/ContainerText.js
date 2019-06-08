import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.div`
  font-size: 25px;
`;

const Text = styled.div`
  font-size: 18px;
`;

class ContainerText extends React.Component {
  render() {
    return (
      <div>
        <SubTitle>{this.props.title}</SubTitle>
        <Text>{this.props.text}</Text>
      </div>
    );
  }
}

export default ContainerText;