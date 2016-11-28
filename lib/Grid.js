// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { computeCellPositions, computeCellWidth } from './utils';
import type { CellsPositions } from './types';

type Props = {
  columns: number,
  data: [ { text: string } ],
  wrapperWidth: number
}

type State = {
  heights: [number]
}

class Masonry extends Component {
  positions: CellsPositions;
  props: Props;
  state: State;
  tmpHeights: [number];

  constructor(props: Props) {
    super(props);
    this.state = {
      heights: Array(this.props.data.length).fill(0)
    }
    this.positions = Array(this.props.data.length).fill({x:0, y:0});
    this.tmpHeights = Array(this.props.data.length).fill(0);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // wrapper layout stays the same
    if(this.props.columns === nextProps.columns && this.props.wrapperWidth === nextProps.wrapperWidth) {
      // cells dimensions stay the same
      if(this.state.heights === nextState.heights) {
        return false;
      }
    }
    return true;
  }

  _onLayoutCell = (height: number, index: number) => {
    this.tmpHeights[index] = height;
    if(index === this.state.heights.length-1) { // last cell
      this.positions = computeCellPositions(this.tmpHeights, this.getCellWidth(), this.props.columns);
      this.setState({ heights: this.tmpHeights });
    }
    return true;
  }

  getCellWidth = () => {
    return computeCellWidth(this.props.wrapperWidth, this.props.columns);
  }

  renderCells = (width: number) => {
    return this.props.data.map((cellData, index) => (
      <Cell
        afterLayout={(height) => this._onLayoutCell(height, index)}
        key={index}
        position={this.positions[index]}
        text={cellData.text}
        width={width}
      />
    ));
  }

  render() {
    const width = this.getCellWidth();
    return (
      <View style={styles.container}>
        {this.renderCells(width)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Masonry;
