import type { cellsPositions } from './types';

export const computeCellPosition = (index: number, heights: [number], width:number, columns: number): cellsPositions => {
  if(heights.length === 0) {
    return [{x:0, y:0}];
  }

  let colsBottom = Array(columns).fill(0);
  let currentCol = 0;
  let positions = [];

  for(let i = 0; i <= index; i++) {
    if(i>0 && i%columns === 0) {
      currentCol = 0;
    }
    positions.push({
      x: currentCol * width,
      y: colsBottom[currentCol]
    });
    colsBottom[currentCol] = colsBottom[currentCol] + heights[i];
    currentCol = currentCol + 1;
  };

  return positions[positions.length-1];
}
