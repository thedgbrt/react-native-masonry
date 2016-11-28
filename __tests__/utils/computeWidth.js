import { computeCellWidth } from '../../lib/utils';

describe('Compute width', () => {
  it('divides 0 by 0', () => {
    expect(computeCellWidth(0,0)).toBe(0);
  });

  it('divides 0 by 3', () => {
    expect(computeCellWidth(0,3)).toBe(0);
  });

  it('divides 3 by 0', () => {
    expect(computeCellWidth(3,0)).toBe(0);
  });

  it('divides 500 by 3', () => {
    expect(computeCellWidth(500,3)).toBe(166.67);
  });
});
