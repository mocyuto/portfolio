import React from 'react';
import ContainerTitle from './ContainerTitle';
import ContainerText from './ContainerText';
import { SubContainer } from './Viewport';

const mainText = "I'm work as a Backend Engineer at digital advertising company. ";
const preferText = "I spend most of the time coding with Scala, Golang, Python, and create services on AWS. " +
"I work on high traffic systems such as mobile measurement systems, Ad delivery systems.";
class About extends React.Component {
  render() {
    return (
      <SubContainer>
        <ContainerTitle text="About"/>
        <ContainerText title="Yuto Suzuki" text={mainText} />
        <ContainerText title="" text={preferText} />
        <ContainerText title="Main Language" text="Japanese" />
        <ContainerText title="Professional Experience" text="Software Engineer, Gunosy inc. April 2018 - Present" />
        <ContainerText title="" text="Software Engineer, CyberZ inc. April 2013 - March 2018" />
      </SubContainer>
    );
  }
}
export default About;