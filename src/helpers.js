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
  }

  getPositions = () => {
    const cellsNumber = this.ds.getSectionLengths();
    const positions = [];
    for(i=0; i<cellsNumber; i++){
      const col = i%3;
      const height = this.ds.getRowData(0, i).height;
      const x = col * 100;
      const y = this.colsHeight[col];
      this.increaseColHeight(col, height);
      positions.push([x,y]);
    }
    return positions;
  }

  increaseColHeight = (col:1|2|3, height:number) => {
    this.colsHeight[col] = this.colsHeight[col] + height;
    console.log(this.colsHeight);
  }

  getContainerHeight = () => {
    return Math.max.apply(Math, this.colsHeight);
  }
}

const getRandomHeight = () => {
  const height = Math.random() * 100;
  return Math.ceil(height < 30 ? height+30 : height);
}
