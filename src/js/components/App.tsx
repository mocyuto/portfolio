import * as React from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { Viewport } from "./Viewport";
import { Footer } from "./Footer";

const Wrapper = styled.div`
  font-family: "Noto Sans JP", sans-serif;
`;

export class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Wrapper>
        <Header />
        <Viewport />
        <Footer />
      </Wrapper>
    );
  }
}
