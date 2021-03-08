export const swapIndexes = (links, sourceI, destinationI) => {
  const result = [...links];
  const [removed] = result.splice(startIndex, 1);
  const [removed] = result.splice(startIndex, 1);
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
