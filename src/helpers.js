export const getRandomColor = () => {
  return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

export const getNRows = (n) => {
  const rows = [];
  for(i=0; i<n; i++){
    rows.push({
      id: i,
      height: getRandomHeight()
    });
  }
  return rows;
}

export class Masonry {
  constructor(dataSource) {
    this.ds = dataSource;
    this.colsHeight = [0,0,0];
    this.nextCol = 0;
  }

  getPositions = () => {
    const cellsNumber = this.ds.getSectionLengths();
    const positions = [];
    for(i=0; i<cellsNumber; i++){
      const height = this.ds.getRowData(0, i).height;
      const x = this.nextCol * 100;
      const y = this.colsHeight[this.nextCol];
      positions.push([x,y]);

      this.increaseColHeight(this.nextCol, height);
      this.nextCol = this.getSmallestCol();
    }
    return positions;
  }

  increaseColHeight = (col:1|2|3, height:number) => {
    this.colsHeight[col] = this.colsHeight[col] + height;
  }

  getSmallestCol = () => {
    return this.colsHeight.indexOf(Math.min(...this.colsHeight));
  }

  getContainerHeight = () => {
    return Math.max(...this.colsHeight);
  }
}

const getRandomHeight = () => {
  const height = Math.random() * 100;
  return Math.ceil(height < 30 ? height+30 : height);
}
