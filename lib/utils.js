export const computeWidth = (width: number, columns:number): number => {
  if(width === 0 || columns === 0){
    return 0;
  }
  return Math.round(width / columns * 100) / 100;
}
