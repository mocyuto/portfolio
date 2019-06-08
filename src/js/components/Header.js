import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: fixed;
`;

const H1 = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  margin: 10px;
`;
class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1>Yuto Suzuki</H1>
      </Wrapper>
    );
  }
}
export default Header;