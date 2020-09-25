import * as React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { ContainerTitle } from "./ContainerTitle";
import { ContainerText } from "./ContainerText";

const mainText =
  "I'm a Backend Engineer creating high traffic mobile measurement, and ad delivery systems at a digital advertising company. I usually work architecting using AWS.";

export class About extends React.Component {
  render(): JSX.Element {
    return (
      <AboutContainer>
        <ContainerTitle text="About" />
        <FlexContainer>
          <FlexItem>
            <ContainerText title="Yuto Suzuki / 鈴木 雄登" text={mainText} />
            <ContainerText title="Main Language" text="Japanese" />
            <ContainerText
              title="Skills"
              text="Scala, Go, Python, JavaScript/TypeScript, Java, Objective-C, Vue, ECS, k8s, MySQL, DynamoDB, Kinesis, Athena, Redis, Linux"
            />
          </FlexItem>
          <FlexItem>
            <ContainerText
              title="Professional Experience"
              text="Lead Software Engineer, Gunosy inc. April 2018 - Present"
            />
            <ContainerText
              title=""
              text="Software Engineer, CyberZ inc. April 2013 - March 2018"
            />
            <ContainerText
              title=""
              text="Software Engineer, CyberAgent inc. April 2013 - March 2018"
            />
            <ContainerText
              title="Education Experience"
              text="Tokyo Institute of Technology, M.S. NLP. 2011 - 2013"
            />
            <ContainerText
              title=""
              text="Tokyo Institute of Technology, B.S. Computer Science. 2007 - 2011"
            />
          </FlexItem>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

const AboutContainer = styled.section`
  ${media.lessThan("small")`
    width: 100%;
  `}
  ${media.greaterThan("small")`
    width: 90%;
  `}
  margin-right: auto;
  margin-left: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlexItem = styled.div`
  ${media.lessThan("medium")`
    width: 100%;
  `}
  ${media.greaterThan("medium")`
    width: 50%;
  `}
  min-width: 300px;
`;
