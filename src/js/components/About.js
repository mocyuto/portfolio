import React from 'react';
import ContainerTitle from './ContainerTitle';
import ContainerText from './ContainerText';

class About extends React.Component {
  render() {
    return (
      <div>
        <ContainerTitle text="About"/>
        <ContainerText title="Yuto Suzuki" text="Backend Engineer" />
      </div>      
    );
  }
}
export default About;