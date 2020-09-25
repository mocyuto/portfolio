import * as React from "react";
import styled from "styled-components";

import { MainImage } from "./MainImage";
import { About } from "./About";

const MainContainer = styled.div`
  width: 100%;
`;
const Wrapper = styled.section`
  text-align: center;
`;

export class Viewport extends React.Component {
  render(): JSX.Element {
    return (
      <MainContainer>
        <MainImage />
        <Wrapper>
          <About />
        </Wrapper>
      </MainContainer>
    );
  }
}
