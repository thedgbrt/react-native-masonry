// @flow
import React, { Children, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MasonryItem from './MasonryItem';
import { computeWidth } from './utils';

type Props = {
  children?: React$Element<any>,
  columns: number,
  wrapperWidth: number
}

class Masonry extends Component {
  props: Props;

  shouldComponentUpdate(nextProps:Props) {
    if(this.props.columns === nextProps.columns && this.props.wrapperWidth === nextProps.wrapperWidth){
      return false;
    }
    return true;
  }

  renderChildren = () => (
    Children.map(this.props.children, (element) => (
      <MasonryItem width={computeWidth(this.props.wrapperWidth, this.props.columns)}>
        {element}
      </MasonryItem>
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});

export default Masonry;
