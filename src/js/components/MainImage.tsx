import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export class MainImage extends React.Component {
  render(): JSX.Element {
    return (
      <Wrapper>
        <Img src={"img/honeymoon.jpg"} />
      </Wrapper>
    );
  }
}
