import * as React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
`;

export interface ContainerTitleProps {
  text: string;
}
export class ContainerTitle extends React.Component<ContainerTitleProps> {
  render(): JSX.Element {
    return <Title>{this.props.text}</Title>;
  }
}
