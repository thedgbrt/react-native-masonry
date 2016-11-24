import { computeWidth } from '../lib/utils';

describe('Compute Width', () => {
  it('divides 0 by 0', () => {
    expect(computeWidth(0,0)).toBe(0);
  });
  it('divides 0 by 3', () => {
    expect(computeWidth(0,3)).toBe(0);
  });
  it('divides 3 by 0', () => {
    expect(computeWidth(3,0)).toBe(0);
  });
  it('divides 500 by 3', () => {
    expect(computeWidth(500,3)).toBe(166.67);
  });
});
