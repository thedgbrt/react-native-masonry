import type { CellsPositions } from './types';

export const computeCellPositions = (heights: [number], width:number, columns: number): { end: number, positions: CellsPositions, } => {
  if(heights.length === 0) {
    return {
      end: 0,
      positions: [{x:0, y:0}]
    };
  }

  let positions = [];
  let colsBottom = [];
  let currentCol = 0;

  for(i=0; i<columns; i++){
    colsBottom.push(0);
  }

  heights.map((h, i) => {
    if(i>0 && i%columns === 0) {
      currentCol = 0;
    }
    positions.push({
      x: currentCol * width,
      y: colsBottom[currentCol]
    });
    colsBottom[currentCol] = colsBottom[currentCol] + h;
    currentCol = currentCol + 1;
  });

  return {
    end: Math.max.apply(Math, colsBottom),
    positions: positions
  };
}
