import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.h2`
  font-size: 30px;
`;

class ContainerTitle extends React.Component {
  render() {
    return <Title>{this.props.text}</Title>;
  }
}
ContainerTitle.propTypes = {
  text: PropTypes.string
};
export default ContainerTitle;
