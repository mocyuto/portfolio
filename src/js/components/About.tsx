import * as React from "react";
import { ContainerTitle } from "./ContainerTitle";
import { ContainerText } from "./ContainerText";
import { SubContainer } from "./Viewport";

const mainText =
  "I'm a Backend Engineer creating high traffic mobile measurement, and ad delivery systems at a digital advertising company. ";
const preferText =
  "I usually work using AWS; writing in Scala, Golang and Python.";

export class About extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <SubContainer>
        <ContainerTitle text="About" />
        <ContainerText title="Yuto Suzuki" text={mainText} />
        <ContainerText title="" text={preferText} />
        <ContainerText title="Main Language" text="Japanese" />
        <ContainerText
          title="Professional Experience"
          text="Lead Software Engineer, Gunosy inc. April 2018 - Present"
        />
        <ContainerText
          title=""
          text="Software Engineer, CyberZ inc. April 2013 - March 2018"
        />
      </SubContainer>
    );
  }
}
