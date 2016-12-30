import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Blockquote from '../dist/index.min';

class Page extends React.Component {
  render() {
    const content = (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </div>
    );

    return (
      <div className="blockquote-eg-container">
        <h1>Get-Set-Go Blockquote Component</h1>

        <p className="blockquote-eg-group">
          <h4>Blockquote Styles</h4>

          <Blockquote>{content}</Blockquote>

          <Blockquote isReverse>{content}</Blockquote>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
