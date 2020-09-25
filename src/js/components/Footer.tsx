import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.section`
  margin: 60px 20px 20px;
`;
const Wrapper = styled.div`
  right: 20px;
  position: absolute;
`;
const ALink = styled.a`
  margin: 5px 8px;
  font-size: 25px;
`;

export class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Wrapper>
          <ALink href="https://github.com/mocyuto">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </ALink>
          <ALink href="https://twitter.com/mocyuto">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </ALink>
          <ALink href="https://www.facebook.com/yutosuzu">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </ALink>
          <ALink href="https://yuutookun.hatenablog.com/">
            <FontAwesomeIcon icon={["fas", "file-alt"]} />
          </ALink>
          <ALink href="https://www.slideshare.net/yutosuzu">
            <FontAwesomeIcon icon={["fas", "file-powerpoint"]} />
          </ALink>
        </Wrapper>
      </Container>
    );
  }
}
