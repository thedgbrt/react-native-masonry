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

export const computePositions = (dataSource) => {
  const positions = [];
  const nCells = dataSource.getSectionLengths();
  for(i=0; i<nCells; i++){
    const x = i%3 * 100;
    const y = Math.floor(i/3) * 100;
    positions.push([x,y]);
  }
  return positions;
}

const getRandomHeight = () => {
  const height = Math.random() * 100;
  return Math.ceil(height < 30 ? height+30 : height);
}
