// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { computePositions, computeWidth } from './utils';
import type { cellsPositions } from './types';

type Props = {
  columns: number,
  data: [ { text: string } ],
  wrapperWidth: number
}

type State = {
  cellsPositions: cellsPositions
}

class Masonry extends Component {
  cellsHeight: [?number];
  props: Props;
  state: State;

  constructor() {
    super();
    this.cellsHeight = [];
    this.state = {
      cellsPositions: []
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // layout stays the same
    if(this.props.columns === nextProps.columns && this.props.wrapperWidth === nextProps.wrapperWidth) {
      // cellsPositions stay the same
      if(this.state.cellsPositions === nextState.cellsPositions){
        return false;
      }
    }
    return true;
  }

  _onLayoutCells = (width: number) => {
    const cellsPositions = computePositions(this.cellsHeight, width, this.props.columns);
    this.setState({ cellsPositions: cellsPositions });
    return true;
  }

  getCellPosition = (index: number) => {
    return this.state.cellsPositions[index] ? this.state.cellsPositions[index] : {x:0,y:0};
  }

  getCellWidth = () => {
    return computeWidth(this.props.wrapperWidth, this.props.columns);
  }

  storeCellHeight = (height: number) => {
    this.cellsHeight = this.cellsHeight.concat(height);
    return true;
  }

  renderCells = (width: number) => {
    return this.props.data.map((cellData, index) => (
      <Cell
        afterLayout={index === this.props.data.length-1 ? () => this._onLayoutCells(width) : undefined}
        storeCellHeight={(height) => this.storeCellHeight(height)}
        text={cellData.text}
        position={this.getCellPosition(index)}
        width={width}
        key={index}
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
