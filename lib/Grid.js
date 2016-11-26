// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { computeWidth } from './utils';

type Props = {
  columns: number,
  data: [ { text: string } ],
  wrapperWidth: number
}

class Masonry extends Component {
  cellsHeight: [?number];
  props: Props;

  constructor() {
    super();
    this.cellsHeight = [];
  }

  shouldComponentUpdate(nextProps:Props) {
    if(this.props.columns === nextProps.columns && this.props.wrapperWidth === nextProps.wrapperWidth){
      return false;
    }
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.cellsHeight);
    }, 100);
  }

  getCellWidth = () => {
    return computeWidth(this.props.wrapperWidth, this.props.columns);
  }

  storeCellHeight = (height: number) => {
    this.cellsHeight = this.cellsHeight.concat(height);
    return true;
  }

  renderCells = () => {
    const width = this.getCellWidth();
    return this.props.data.map((cellData, index) => (
      <Cell
        storeCellHeight={(height) => this.storeCellHeight(height)}
        text={cellData.text}
        width={width}
        key={index}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCells()}
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
