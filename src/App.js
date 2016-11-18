// @flow

import React, { Component } from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';
import { getNRows, getRandomColor } from './helpers';


class App extends Component {
  state: {
    dataSource: {}
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(getNRows(100))
    };
  }

  renderRow = (height: number) => {
    return (
      <View style={{
        backgroundColor: getRandomColor(),
        height: height
      }}>
        <Text>Hello</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowHeight) => this.renderRow(rowHeight)}
      />
    )
  }
}

export default App;
