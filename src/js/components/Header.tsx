import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  color: #fff;
`;

const H1 = styled.h1`
  margin: 10px;
`;

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <Wrapper>
        <H1>Yuto Suzuki</H1>
      </Wrapper>
    );
  }
}
