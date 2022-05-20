import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
const LinkContainer = ({
  url,
  iconSet,
}: {
  url: string;
  iconSet: IconProp;
}): JSX.Element => {
  return (
    <ALink href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={iconSet} />
    </ALink>
  );
};

export class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <Wrapper>
          <LinkContainer
            url="https://github.com/mocyuto"
            iconSet={["fab", "github"]}
          />
          <LinkContainer
            url="https://twitter.com/mocyuto"
            iconSet={["fab", "twitter"]}
          />
          <LinkContainer
            url="https://www.facebook.com/yutosuzu"
            iconSet={["fab", "facebook"]}
          />
          <LinkContainer
            url="https://yuutookun.hatenablog.com/"
            iconSet={["fas", "file-alt"]}
          />
          <LinkContainer
            url="https://www.slideshare.net/yutosuzu"
            iconSet={["fas", "file-powerpoint"]}
          />
        </Wrapper>
      </Container>
    );
  }
}
