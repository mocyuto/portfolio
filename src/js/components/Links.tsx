import * as React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { ContainerTitle } from "./ContainerTitle";
import { ContainerIconLink } from "./ContainerLinks";

export class Links extends React.Component {
  render(): JSX.Element {
    return (
      <LinkContainer>
        <ContainerTitle text="Links" />
        <FlexContainer>
          <ContainerIconLink
            text="GitHub"
            url="https://github.com/mocyuto"
            icon={["fab", "github"]}
          ></ContainerIconLink>
          <ContainerIconLink
            text="Twitter"
            url="https://twitter.com/mocyuto"
            icon={["fab", "twitter"]}
          ></ContainerIconLink>
          <ContainerIconLink
            text="Facebook"
            url="https://www.facebook.com/yutosuzu"
            icon={["fab", "facebook"]}
          ></ContainerIconLink>
          <ContainerIconLink
            text="Blog"
            url="https://yuutookun.hatenablog.com"
            icon={["fas", "file-alt"]}
          ></ContainerIconLink>
          <ContainerIconLink
            text="Slides"
            url="https://www.slideshare.net/yutosuzu"
            icon={["fas", "file-powerpoint"]}
          ></ContainerIconLink>
        </FlexContainer>
      </LinkContainer>
    );
  }
}

const LinkContainer = styled.section`
  ${media.lessThan("small")`
    width: 100%;
  `}
  ${media.greaterThan("small")`
    width: 90%;
  `}
  margin-right: auto;
  margin-left: auto;
  text-align: left;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
