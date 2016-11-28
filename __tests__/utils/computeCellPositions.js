import { computeCellPositions } from '../../lib/utils';

const mockCellsHeights = [25,50,75,100,125,150,175,200];
const mockColumns = 3;
const mockWidth = 100;
const mockPosResults = [
  {x:0,y:0}, // col1: 25
  {x:100,y:0}, // col2: 50
  {x:200,y:0}, // col3: 75
  {x:0,y:25}, // col1: 125
  {x:100,y:50}, // col2: 175
  {x:200,y:75}, // col3: 225
  {x:0,y:125}, // col1: 300
  {x:100,y:175}, // col2: 375
];

describe('Compute positions', () => {
  it('If height is empty, returns array of single default coordinates object', () => {
    const pos = computeCellPositions([], mockWidth, mockColumns);
    expect(pos.positions[0].x).toEqual(0);
    expect(pos.positions[0].y).toEqual(0);
  });

  it('Returns a coordinates object for each height value', () => {
    const pos = computeCellPositions(mockCellsHeights, mockWidth, mockColumns);
    expect(pos.positions.length).toEqual(8);
    for(i=0; i<pos.positions.length; i++) {
      expect(pos.positions[i].x).toBeDefined();
      expect(pos.positions[i].y).toBeDefined();
    }
  });

  it('Calculates positions properly', () => {
    const pos = computeCellPositions(mockCellsHeights, mockWidth, mockColumns);
    for(i=0; i<pos.length; i++) {
      expect(pos.positions[i].x).toEqual(mockPosResults[i].x);
      expect(pos.positions[i].y).toEqual(mockPosResults[i].y);
    }
  });

  it('Returns the total height of the grid', () => {
    const pos = computeCellPositions(mockCellsHeights, mockWidth, mockColumns);
    expect(pos.end).toEqual(375);
  });
});
