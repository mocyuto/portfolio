import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.section`
  margin: 20px;
`;
const Wrapper = styled.div`
  right: 20px;
  position: absolute;
`;
const ALink = styled.a`
  margin: 5px;
  font-size: 25px;
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ALink href="https://github.com/moc-yuto">
            <FontAwesomeIcon icon={['fab', 'github']}/>
          </ALink>
          <ALink href="https://twitter.com/mocyuto">
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
          </ALink>
          <ALink href="https://yuutookun.hatenablog.com/">
            <FontAwesomeIcon icon={['fas', 'file-alt']}/>
          </ALink>
        </Wrapper>
      </Container>
    );
  }
}
export default Footer;