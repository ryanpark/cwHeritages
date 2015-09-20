import React from 'react';

import View from './View';
import Text from './Text';
import styles from 'components/styles';

export default class Clock extends React.Component {
  static propTypes = {
    clock: React.PropTypes.object
  }
  render () {
    const now = this.props.clock.now.format('HH:mm:ss').split(':');
    const hours = now[0];
    const minutes = now[1];
    const seconds = now[2];
    return (
      <View style={styles.clock.wrapper}>
        <Text style={styles.clock.hours}>
          {hours}
        </Text>
        <Text style={styles.clock.colon}>
          :
        </Text>
        <Text style={styles.clock.minutes}>
          {minutes}
        </Text>
        <Text style={styles.clock.colon}>
          :
        </Text>
        <Text style={styles.clock.seconds}>
          {seconds}
        </Text>
      </View>
    );
  }
}
