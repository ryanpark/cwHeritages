import React from 'react';
import {connect} from 'react-redux';

import View from 'components/View';
import RandomNumber from 'components/RandomNumber';
import Clock from 'components/Clock';
import styles from 'components/styles';
import {randomNumber, clock} from 'actions';

const seconds = (time) => time * 1000;

@connect(state => state)
export default class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    randomNumber: React.PropTypes.object,
    clock: React.PropTypes.object
  }
  componentDidMount() {
    this.props.dispatch(randomNumber());
    this.props.dispatch(clock());
    setInterval(() => this.props.dispatch(randomNumber()), seconds(5));
    setInterval(() => this.props.dispatch(clock()), seconds(1));
  }
  render () {
    const number = this.props.randomNumber.loading
      ? <View>loading</View>
      : <RandomNumber {...this.props}/>;
    return (
      <View>
        <View style={styles.wrapper}>
          <View>
            <Clock {...this.props}/>
          </View>
          <View>
            {number}
          </View>
        </View>
      </View>
    );
  }
}
