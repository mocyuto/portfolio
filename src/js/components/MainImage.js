import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

class MainImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img src={"img/honeymoon.jpg"} />
      </Wrapper>
    );
  }
}
export default MainImage;
