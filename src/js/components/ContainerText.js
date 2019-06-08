import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
`;
const SubTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px;
`;

const Text = styled.div`
  font-size: 18px;
`;

class ContainerText extends React.Component {
  render() {
    return (
      <Container>
        <SubTitle>{this.props.title}</SubTitle>
        <Text>{this.props.text}</Text>
      </Container>
    );
  }
}

export default ContainerText;