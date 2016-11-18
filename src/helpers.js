export const getRandomColor = () => {
  return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

export const getNRows = (n) => {
  const rows = [];
  for(i=0; i<n; i++){
    rows.push(getRandomHeight());
  }
  return rows;
}

const getRandomHeight = () => {
  const height = Math.random() * 100;
  return Math.ceil(height < 30 ? height+30 : height);
}
