// @flow
import React, { Children, Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MasonryItem from './MasonryItem';
import { computeWidth } from './utils';

type Event = {
  nativeEvent: {
    layout: {
      width: number
    }
  }
}

type Props = {
  children?: React$Element<any>,
  columns: number
}

type State = {
  width: number
}

class Masonry extends Component {
  props: Props;
  state: State;
  constructor() {
    super();
    this.state = {
      width: 0
    }
  }

  onLayout = (e: Event) => {
    this.setState({ width: e.nativeEvent.layout.width });
  }

  shouldComponentUpdate(nextProps:Props, nextState:State) {
    if(this.props.columns === nextProps.columns && this.state.width === nextState.width){
      return false;
    }
    return true;
  }

  renderChildren = () => {
    if(this.state.width > 0){
      return (
        Children.map(this.props.children, (element) => (
          <MasonryItem width={computeWidth(this.state.width, this.props.columns)}>
            {element}
          </MasonryItem>
        ))
      );
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        onLayout={(e) => this.onLayout(e)}
      >
        {this.renderChildren()}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});

export default Masonry;
