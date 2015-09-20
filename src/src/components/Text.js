import React from 'react';

export default class Text extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }
  render () {
    return (
      <span {...this.props}>
        {this.props.children}
      </span>
    );
  }
}
