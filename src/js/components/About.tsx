import * as React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { ContainerTitle } from "./ContainerTitle";
import { ContainerText } from "./ContainerText";
import { ContainerLinks, ContainerLink } from "./ContainerLinks";

const mainText =
  "I'm a Backend Engineer creating high traffic mobile measurement, and ad delivery systems at a digital advertising company. I usually work architecting using AWS.";
const links: ContainerLink[] = [
  {
    text: "マネージャーではなく、技術のスペシャリストとして生きる道",
    url: "https://news.mynavi.jp/itsearch/article/solution/4895",
  },
  {
    text:
      "「エンジニアのキャリアパスで新しい選択肢となるモデルを作る」 Gunosyが構築したエンジニアのための新しい評価制度とは",
    url: "https://thinkit.co.jp/article/17563",
  },
  {
    text: "第10期下半期AWARD受賞者インタビューVol.2",
    url:
      "https://gunosiru.gunosy.co.jp/entry/%e7%ac%ac10%e6%9c%9f%e4%b8%8b%e5%8d%8a%e6%9c%9faward%e5%8f%97%e8%b3%9e%e8%80%85%e3%82%a4%e3%83%b3%e3%82%bf%e3%83%93%e3%83%a5%e3%83%bcvol-2%ef%bc%8f%e6%96%b0%e3%81%97%e3%81%8f%e3%81%a6%e3%80%81",
  },
];

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
              text="Scala, Go, Python, JavaScript/TypeScript, Ruby, Java, Objective-C, kubernetes, AWS"
            />
            <ContainerText
              title="Hobby"
              text="Tennis, Futsal, Read books, Games"
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
            <ContainerLinks title="Interviews" links={links} />
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
  text-align: left;
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
