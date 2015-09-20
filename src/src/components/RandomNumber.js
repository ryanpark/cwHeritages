import React from 'react';

import View from './View';
import Text from './Text';
import styles from 'components/styles';

export default class RandomNumber extends React.Component {
  static propTypes = {
    randomNumber: React.PropTypes.object
  }
  render () {
    return (
      <View style={styles.randomNumber.wrapper}>
        <Text style={styles.randomNumber.text}>
          {this.props.randomNumber.number}
        </Text>
      </View>
    );
  }
}
