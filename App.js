import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Root, Tabs } from './config/router';

class App extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  render() {
    return <Root />;
  }
}

export default App;
