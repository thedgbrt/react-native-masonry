// @flow

import React, { Component } from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';
import { getNRows, getRandomColor, Masonry } from './helpers';

const listViewStyle = {
  flex: 1
}

const rowStyle = {
  position: 'absolute',
  width: 100
};

class App extends Component {
  cellPositions: [[number, number]];
  containerHeight: number;
  state: {
    dataSource: {}
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(getNRows(100));
    const masonry = new Masonry(dataSource);
    this.state = {
      dataSource: dataSource
    };
    this.cellPositions = masonry.getPositions();
    this.containerHeight = masonry.getContainerHeight();
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
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
        contentContainerStyle={{...listViewStyle, height:this.containerHeight}}
        initialListSize={100}
      />
    );
  }
}

export default App;
