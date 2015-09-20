import React from 'react';

export default class View extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }
  render () {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
