export type NativeEvent = {
  nativeEvent: {
    layout: {
      width: number
    }
  }
};

export type CellPosition = {
  x: number,
  y: number
};

export type CellsPositions = [<CellPosition>];
