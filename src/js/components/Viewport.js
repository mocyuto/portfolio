import React from 'react';

import MainImage from './MainImage';

class Viewport extends React.Component {

  constructor() {
    super();
    this.styles = {
      width: '100%'
    };
  }

  render() {
    return (
      <div style={this.styles}>
        <MainImage />
      </div>
    );
  }
}

export default Viewport;