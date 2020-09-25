import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;
const SubTitle = styled.div`
  font-size: 25px;
  margin: 10px 0px;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const Li = styled.li`
  margin: 10px;
`;
const Text = styled.div`
  font-size: 14px;
`;

export interface ContainerLink {
  text: string;
  url: string;
}
export interface ContainerLinkProps {
  title: string;
  links: ContainerLink[];
}

export class ContainerLinks extends React.Component<ContainerLinkProps> {
  render(): JSX.Element {
    return (
      <Container>
        <SubTitle>{this.props.title}</SubTitle>
        <Ul>
          {this.props.links.map((link, index) => (
            <Li key={index}>
              <a href={link.url}>
                <Text>{link.text}</Text>
              </a>
            </Li>
          ))}
        </Ul>
      </Container>
    );
  }
}
