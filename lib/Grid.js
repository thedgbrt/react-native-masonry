// @flow
import React, { Children, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { computeWidth } from './utils';

type Props = {
  children?: React$Element<any>,
  columns: number,
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

  renderChildren = () => {
    const width = this.getCellWidth();
    return Children.map(this.props.children, (child, index) => (
      <Cell
        storeCellHeight={(height) => this.storeCellHeight(height)}
        width={width}
      >
        {child}
      </Cell>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderChildren()}
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
