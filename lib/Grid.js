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
  height: number;
  props: Props;

  constructor() {
    super();
    this.height = 0;
  }

  shouldComponentUpdate(nextProps:Props) {
    if(this.props.columns === nextProps.columns && this.props.wrapperWidth === nextProps.wrapperWidth){
      return false;
    }
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.height);
    }, 100);
  }

  getCellWidth = () => {
    return computeWidth(this.props.wrapperWidth, this.props.columns);
  }

  storeHeight = (height: number) => {
    this.height = height + this.height;
    return true;
  }

  renderChildren = () => (
    Children.map(this.props.children, (element) => (
      <Cell
        storeHeight={(height) => this.storeHeight(height)}
        width={this.getCellWidth()}
      >
        {element}
      </Cell>
    ))
  );

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
