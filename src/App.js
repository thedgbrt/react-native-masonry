// @flow

import React, { Component } from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';
import { computePositions, getNRows, getRandomColor } from './helpers';

const listViewStyle = {
  flex: 1
}

const rowStyle = {
  position: 'absolute',
  width: 100
};

class App extends Component {
  cellPositions: [[number, number]];
  state: {
    dataSource: {}
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(getNRows(100))
    };
    this.cellPositions = [[0,0]];
  }

  renderRow = (row: {id: number, height: number}) => {
    const pos = this.cellPositions[row.id];
    const style = {
      ...rowStyle,
      backgroundColor: getRandomColor(),
      height: row.height,
      left: pos[0],
      top: pos[1]
    };
    return (
      <View style={style}>
        <Text>Hello</Text>
      </View>
    );
  }

  render() {
    this.cellPositions = computePositions(this.state.dataSource);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
        contentContainerStyle={listViewStyle}
        initialListSize={100}
      />
    );
  }
}

export default App;
